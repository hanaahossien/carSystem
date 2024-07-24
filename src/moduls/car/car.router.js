import { Router } from "express";
import { addcar, avOrRentSP, deletecar, getAVspcM, getall, getspc , rentorspc, updatecar} from "./car.controler.js";
import { errorhandle } from "../../middleware/catcherror.js";
import { validationMw } from "../../middleware/validation.Mw.js";
import { carschema } from "./car.schema.js";
export const userrouter = Router();

userrouter.post("/add",validationMw(carschema),addcar).get("/:_id",getspc)

// error 2

userrouter.put("/all",errorhandle(getall)).get("/r/:model",rentorspc).get("/av/:avModel/re/:reModel",avOrRentSP)

userrouter.patch("/update/:_id",updatecar).delete('/delete/:_id',deletecar).get("/m/:model",getAVspcM)

