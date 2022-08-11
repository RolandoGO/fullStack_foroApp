import express from "express"
import register_login_validation from "../../middlewares/requestValidations/general_validation_func.js"
import loginControl from "../../controls/loginControl/index.js"
const Route = express.Router()


Route.post("/", register_login_validation , loginControl )


export default Route