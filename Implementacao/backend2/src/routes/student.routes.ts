import { Router } from "express";
import { CreateStudentController } from "../modules/students/useCases/createStudent/CreateStudentController";
import { StudentLoginController } from "../modules/students/useCases/studentLogin/StudentLoginController";

const createUserController = new CreateStudentController();
const studentLoginController = new StudentLoginController()

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/login", studentLoginController.handle)

export { userRoutes };
