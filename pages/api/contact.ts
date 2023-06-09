import { NextApiHandler } from "next"
import csvdb from "csv-database"
import axios from 'axios'
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Initialize the sheet - doc ID is the long id in the sheets URL

const doc = new GoogleSpreadsheet('1sXfiIJ3xPIlgNf_MSMgiJMFMpetJlm5qIQ6MuoU2tjA');
const jsonEndpoint = 'https://api.npoint.io/882011fc667c61e3167c'
const handler: NextApiHandler = async (req, res) => {
    const { fullname, email, mobile, suburb } = req.body
    //check if localhost or online
    //localhost contains 'localhost' in the host header
    console.log("HOST", req.headers.host)
    if (!req.headers.host) {
        return res.status(500).json({ message: "error", error: "no host header", host: req.headers.host })
    }
    if (req.headers.host.includes('localhost')) {
        let db = undefined
        try {

            db = await csvdb("contact.csv", ["email", "fullname", "mobile", "suburb"]);
            //check existing email
            const existingEmail = await db.get({ email })
            if (existingEmail.length > 0) {
                db.edit({ email }, { fullname, mobile, suburb })
            } else {
                db.add({ email, fullname, mobile, suburb })
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "error", error, host: req.headers.host })
        }
        return res.status(200).json({ message: "success", db, host: req.headers.host })
    } else {
        try {
            await doc.useServiceAccountAuth({
                // env var values are copied from service account credentials generated by google
                // see "Authentication" section in docs for more info
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL as string,
                private_key: (process.env.GOOGLE_PRIVATE_KEY)!.replace(/\\n/g, '\n') as string,
            });
            await doc.loadInfo()
            console.log(doc.title)
            const sheet = doc.sheetsByIndex[0]
            //check if has header
            const headerValues = await sheet.headerValues
            console.log("hasHeader", sheet.title, headerValues,)
            if (!headerValues) {
                await sheet.setHeaderRow(['email', 'fullname', 'mobile', 'suburb'])
            }
            //check existing email
            const rows = await sheet.getRows()
            const existingEmail = rows.find(row => row.email === email)
            if (existingEmail) {
                existingEmail.fullname = fullname
                existingEmail.mobile = mobile
                existingEmail.suburb = suburb
                await existingEmail.save()
            } else {
                await sheet.addRow({ email, fullname, mobile, suburb })
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "error", error, host: req.headers.host })
        }
        return res.status(200).json({ message: "success" })

    }





}

export default handler