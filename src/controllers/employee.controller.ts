import { Request, Response } from "express";
import employees from '../data/employees.json';

export async function getAllEmployees(req: Request, res: Response): Promise<any> {
  const count: number = parseInt(req.query?.count as unknown as string ?? employees.length) ?? employees.length;

  res.status(200).json({
    status: 200,
    data: employees.slice(0, count)
  })
}

export async function getEmployee(req: Request, res: Response): Promise<any> {
  res.status(401).json({
    status: 401,
    message: 'Permission not authorized.'
  })
}

export async function updateEmployee(req: Request, res: Response): Promise<any> {
  res.status(400).json({
    status: 400,
    message: 'Invalid data in payload.'
  })
}