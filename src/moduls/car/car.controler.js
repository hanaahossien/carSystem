


import { carmodel } from "../../../db/model/car.model.js";

export const addcar = async (req, res) => {
    const { name, model, rentalstatus } = req.body;
    const car = await carmodel.create({ name, model, rentalstatus })
    res.json({ "msg": "added car", car })

}

export const getspc = async (req, res) => {
    const { _id } = req.params;
    const car = await carmodel.findById(_id)
    res.json({ " msg": " car info", car })

}

export const getall = async (req, res) => {
    const x = 4;
    x = 5;
    const M = req.query.model;
    if (M) {
        const car = await carmodel.find({ model: M });
        return res.json({ " msg": "all cars", car })

    }
    else {
        const car = await carmodel.find({});

        return res.json({ " msg": "all cars", car })

    }
}




export const updatecar = async (req, res) => {
    const { _id } = req.params;
    const { name, model, rentalstatus } = req.body;

    const car = await carmodel.findOneAndUpdate({ _id }, { name, model, rentalstatus }, { new: true })
    res.json({ " msg": "updated ", car })

}

export const deletecar = async (req, res) => {
    const { _id } = req.params;

    const car = await carmodel.deleteOne({ _id })
    res.json({ " msg": "car deleted   ", car })

}



// 2- Get Available Cars of a Specific Model.

export const getAVspcM = async (req, res) => {
    try {

        const { model } = req.params;

        const car = await carmodel.find({ rentalstatus: "available" }, { model });
        return res.json({ " msg": "Available Cars of a Specific Model", car })

    } catch (error) {
        console.log("catch error", error)

    }
}




// 3- Get Cars that are Either rented or of a Specific Model.

export const rentorspc = async (req, res) => {
    try {
        const { model } = req.params;
        const car = await carmodel.find({ $or: [{ rentalstatus: "rented" }, { model }] });
        return res.json({ " msg": "rented  Cars or spc model ", car })

    } catch (error) {
        console.log("catch error", error)

    }
}


// Get Available Cars of Specific Models or Rented Cars of a Specific Model

export const avOrRentSP = async (req, res) => {
    try {
        const { reModel } = req.params;
        const { avModel } = req.params;

        const car = await carmodel.find({ $or: [{ rentalstatus: "rented", model: reModel }, { rentalstatus: "available", model: avModel }] });
        return res.json({ " msg": "rented  Cars or spc model ", car })

    } catch (error) {
        console.log("catch error", error)

    }
}