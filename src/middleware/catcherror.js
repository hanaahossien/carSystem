import { Error } from "mongoose";
import { Errorhandlerclass } from "../utlits/error.class.utlit.js";



// error 1 on car router
export function errorhandle(API) {
    return (req, res, next) => {
        API(req, res, next).catch((err) => {
            console.log("err in errorehanle middleware");
           /// res.status(500).json({ msg: "internal server error", err: err.message, stack: err.stack })
           next(new Errorhandlerclass("internal server error",500,{"name":err.message}))
        })
    }
}

// error 3 add it in index

export const globalresponse = (err, req, res, next) => {
    if (err) {
        res.status(err['statusCode'] || 500).json({
            message: "internal server errorrrr",
            errorr: err.message ,
            stack: err.stack
        })

    }
}