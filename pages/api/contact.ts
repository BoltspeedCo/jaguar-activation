import { NextApiHandler } from "next"
import csvdb from "csv-database"
const handler: NextApiHandler = async (req, res) => {
    const { fullname, email, mobile, suburb } = req.body
    //check if localhost or online
    console.log("HOST", req.headers.host)

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

}

export default handler