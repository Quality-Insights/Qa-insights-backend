import { Router } from "express";
import { getAllEmployees, getEmployee, updateEmployee } from "../controllers/employee.controller";

const employeeRouter = Router();

employeeRouter.get('/getEmployees', getAllEmployees);
employeeRouter.get('/getEmployee', getEmployee);
employeeRouter.patch('/updateEmployee', updateEmployee);

export default employeeRouter;
