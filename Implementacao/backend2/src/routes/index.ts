import { Router } from "express";
import { userRoutes } from "./student.routes";

const routes = Router();

routes.use("/students", userRoutes);

export { routes };
