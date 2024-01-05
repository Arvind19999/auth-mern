import express from "express";

import { postSignUp } from "../controller/auth.js";

const router = express.Router()


router.post("/signup",postSignUp);

export default router;