import { Request, Response } from "express";

export async function getAllEmployees(req: Request, res: Response): Promise<any> {
  res.status(200).json({
    status: 200,
    message: 'Successfully fetched.'
  })
}

export async function getEmployee(req: Request, res: Response): Promise<any> {
  res.status(200).json({
    status: 200,
    message: 'Permission not authorized.'
  })
}

export async function updateEmployee(req: Request, res: Response): Promise<any> {
  res.status(400).json({
    status: 400,
    message: 'Invalid data in payload.'
  })
}