import joi from "joi";

export const carschema= {body:joi.object({
    name:joi.string().required(),
    model:joi.string().required(),
    rentalstatus:joi.string().required()
})}