import { Router } from "express";
import { addrental, allrental, deleterental, getspcrental, getusercarrented, updaterental } from "./rental.controler.js";

export const rentalrouter= Router();

rentalrouter.get("/",allrental).post("/add",addrental).put("/:_id",updaterental);
rentalrouter.get("/:_id",getspcrental).delete("/:_id",deleterental).get("/u/user",getusercarrented)