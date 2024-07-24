import { Router } from "express";
import { deletecustmer, getall, getcustomer, signin, signup, updatecustomer } from "./customer.controler.js";


export const customerrouter= Router();
customerrouter.post("/signup",signup).post("/signin",signin).get("/all",getall);

customerrouter.get("/:_id",getcustomer).put("/:_id",updatecustomer).delete("/:_id",deletecustmer);



