
import { Schema, model } from "mongoose";
// Should have fields like name, model, and rental status(available/rented)


const carschema = new Schema(
    {
        name: {
            type:String

        },
        model:
        {
            type:String,
        

        },
        rentalstatus: {
            type:String,
            enum: ["available", "rented"]
        }
    }, { timestamps: true })

export const carmodel = model("car", carschema)