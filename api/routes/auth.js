import express from "express";

import { postSignUp,postLogin } from "../controller/auth.js";

const router = express.Router()


router.post("/user/signup",postSignUp);

router.post("/user/login",postLogin);

export default router;