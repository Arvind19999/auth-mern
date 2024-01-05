import express from "express";

import {apis}  from "../controller/user.js";


const router  = express.Router();

router.get("/message",apis)

export default router;