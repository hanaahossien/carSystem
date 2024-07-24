import mongoose from "mongoose";

const { Schema, model } = mongoose;


// name, password, email, and phone ,number

const retenalcarschema = new Schema(
    {
        rentalD: {
            type: Date
        },
        returnD: {
            type: Date
        },
        Car_id: {
            type: Schema.Types.ObjectId,
            ref: "car"
        },
        Customer_id: {
            type: Schema.Types.ObjectId ,
            ref: "Customer"
        }

    }, { timestamps: true }
)

export const retenalcar = model("retenalcar", retenalcarschema);