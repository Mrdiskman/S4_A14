import {Router} from "express"
import createUserController from "../controllers/createUser.controler"
import deleteUserController from "../controllers/deleteUser.controller"
import listUserController from "../controllers/listUser.controler"
import userLoginController from "../controllers/userLogin.controller"
import updatedUserController from "../controllers/userPatch.controller"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares"
import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware"
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware"
import verifyIsAdmUpdateMiddleware from "../middlewares/verifyIsAdmUpdate.middleware"

export const loginRouter = Router()
const router = Router()

router.post("", verifyEmailMiddleware, createUserController)
router.post("", userLoginController)
router.get("", ensureAuthMiddleware, verifyIsAdmMiddleware,listUserController)
router.patch("/:id", ensureAuthMiddleware, verifyIsAdmUpdateMiddleware, updatedUserController)
router.delete("/:id", ensureAuthMiddleware, verifyIsAdmMiddleware, deleteUserController)


export default router