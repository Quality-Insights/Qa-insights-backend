import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/profile.controller";

const profileRouter = Router();

profileRouter.patch('/update', updateProfile);
profileRouter.get('/', getProfile);

export default profileRouter;
