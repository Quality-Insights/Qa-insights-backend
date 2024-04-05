import { Request, Response, NextFunction } from 'express';

export async function loginUser(req: Request, res: Response): Promise<any> {
  res.status(200).json({
    status: 200,
    message: 'Successfully Loggedin'
  })
}

export async function registerUser(req: Request, res: Response): Promise<any> {
  res.status(200).json({
    status: 200,
    message: 'Successfully Registered'
  })
}

export async function logoutUser(req: Request, res: Response): Promise<any> {
  res.status(200).json({
    status: 200,
    message: 'Successfully LoggedOut'
  })
}