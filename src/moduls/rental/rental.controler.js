import { retenalcar } from "../../../db/model/rentalcar.model.js"
import jwt from "jsonwebtoken"
export const allrental = async (req, res) => {
    try {
        const rental = await retenalcar.find()
        res.json({ "msg": "all rental", rental })
    } catch (error) {
        console.log("catch error", error)
    }
}


export const addrental = async (req, res) => {
    try {
        const { rentalD, returnD, Car_id, Customer_id } = req.body;
        const rental = await retenalcar.create({ rentalD, returnD, Car_id, Customer_id })
        res.json({ "msg": " done", rental })
    } catch (error) {
        console.log("catch error", error)
    }
}


export const getusercarrented = async (req, res) => {
    try {

        const {token}= req.headers;
        const tokendata = jwt.verify(token , "hana123")

        
        const usercarhistory = await retenalcar.find({Customer_id:tokendata._id});

        res.status(200).json({ "msg": "token", tokendata , usercarhistory })

    } catch (error) {
        console.log("some thing error", error)
    }

}




export const updaterental = async (req, res) => {
    try {
        const { _id } = req.params;
        const { rentalD, returnD, Car_id, Customer_id } = req.body;
        const newdata = { rentalD, returnD, Car_id, Customer_id };
        const updated = await retenalcar.findByIdAndUpdate({ _id }, newdata, { new: true })
        res.json({ "msg": "done updated ", updated })
    } catch (error) {
        console.log("catch error", error)
    }
}

export const getspcrental = async (req, res) => {
    try {
        const { _id } = req.params;
        const data = await retenalcar.findOne({ _id })
        res.json({ "msg": "done spc. rental  ", data })
    } catch (error) {
        console.log("catch error", error)
    }
}


export const deleterental = async (req, res) => {
    try {
        const { _id } = req.params;
        const data = await retenalcar.findByIdAndDelete({ _id })
        res.json({ "msg": "done deleted" })
    } catch (error) {
        console.log("catch error", error)
    }
}