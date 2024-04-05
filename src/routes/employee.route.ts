import { Router } from "express";
import { getAllEmployees, getEmployee, updateEmployee } from "../controllers/employee.controller";

const employeeRouter = Router();

employeeRouter.get('/getEmployees', getAllEmployees);
employeeRouter.get('/getEmpoyee', getEmployee);
employeeRouter.post('/updateEmployee', updateEmployee);

export default employeeRouter;
