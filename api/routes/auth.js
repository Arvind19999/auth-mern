import express from "express";

import { postSignUp,postLogin,postGoogleLogIn } from "../controller/auth.js";

const router = express.Router()


router.post("/user/signup",postSignUp);

router.post("/user/login",postLogin);

router.post("/google/login",postGoogleLogIn)

export default router;