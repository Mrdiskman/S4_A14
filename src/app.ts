import "reflect-metadata"
import express from "express"
import usersRouter from "../src/routes/user.routes"
import loginRouter from "../src/routes/login.routes"

const app = express()
app.use(express.json())
app.use("/users", usersRouter)
app.use("/login", loginRouter)

export default app