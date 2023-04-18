import { NextApiHandler } from "next"
import csvdb from "csv-database"
const handler: NextApiHandler = async (req, res) => {
    const { fullname, email, mobile, suburb } = req.body
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
        return res.status(500).json({ message: "error", error })
    }
    return res.status(200).json({ message: "success", db })

}

export default handler