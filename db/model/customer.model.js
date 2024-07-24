import mongoose from "mongoose";

const { Schema, model } = mongoose;


// name, password, email, and phone ,number

const customerschema = new Schema(
    {
        name: {
            type: String
        },
        password: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        phone: {
            type: Number,
            unique: true
        }

    }, {timestamps:true}
)

export const customermodel= model("customer",customerschema);