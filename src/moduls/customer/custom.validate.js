import Joi from "joi";


export const sigenupSchemaV ={
    body : Joi.object({
        //name, password, email, phone 
        name:Joi.string().alphanum().min(3).max(50).required(),
        password:Joi.string().required(),
        email:Joi.string().email().required(),
        phone:Joi.number().required()
    })
};



export const sigeninSchemaV ={
    body : Joi.object({
        //name, password, email, phone 
        password:Joi.string().required(),
        email:Joi.string().email().required(),
    })
};