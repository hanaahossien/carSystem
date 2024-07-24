
// 2- Sign in
// 5- Update user (owner only)
// 6- Delete user (owner only)



import { customermodel } from "../../../db/model/customer.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { sigenupSchemaV } from "./custom.validate.js";
import { Errorhandlerclass } from "../../utlits/error.class.utlit.js";


// name, password, email, and phone 
export const signup = async (req, res, next) => {
    try {
        const { name, password, email, phone } = req.body;

        const isexist = await customermodel.findOne({ email })

        if (!isexist) {
            const hash = await bcrypt.hash(password, 8);
            const user = await customermodel.create({ name, password: hash, email, phone });
            return res.json({ "msg": "added user", user });
        }
        else {
            //res.json({ "msg": " this user  signup before" });
            next(new Errorhandlerclass(" this user  signup beforeeee", 400))
        }

    } catch (error) {
        console.log("catch error", error)
    }
}

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await customermodel.findOne({ email });
        if (!user) { return res.json({ "msg": " invaild login 1" }) }

        const match = bcrypt.compareSync(password, user.password)

        if (!match) { return res.json({ "msg": " invaild login 2" }) }

        else {
            const token = jwt.sign({ email, _id: user._id }, "hana123", { expiresIn: "1d" })
            res.json({ "msg": "  login  sucssed", token })
        }

    } catch (error) {
        console.log("catch error", error)

    }
}



export const getall = async (req, res) => {
    try {

        const allcust = await customermodel.find();

        res.status(200).json({ "msg": "all customers", allcust })

    } catch (error) {
        console.log("some thing error", error)
    }

}




export const getcustomer = async (req, res) => {
    try {
        const { _id } = req.params;
        const allcust = await customermodel.find({ _id });

        if (allcust.length < 1) {
            res.json({ "msg": "this customer not fond  " })
        }
        else {
            res.status(200).json({ "msg": "customer info ", allcust })
        }

    } catch (error) {
        console.log("found error ", error)
    }

}

export const updatecustomer = async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, email, phone } = req.body;
        const newdata = { name, email, phone };

        const updatedata = await customermodel.findByIdAndUpdate({ _id }, newdata, { new: true });

        res.status(200).json({ "msg": "updated  sucssed ", updatedata })



    } catch (error) {
        console.log("found error ", error)
    }

}



export const deletecustmer = async (req, res) => {
    try {
        const { _id } = req.params;

        const deletecustmer = await customermodel.findByIdAndDelete({ _id });

        res.status(200).json({ "msg": "this user deleted   ", deletecustmer })



    } catch (error) {
        console.log("found error ", error)
    }

}