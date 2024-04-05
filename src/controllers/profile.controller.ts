import { Request, Response, NextFunction } from 'express';

export async function getProfile(req: Request, res: Response): Promise<any> {
  res.status(200).json({
    status: 200,
    message: 'Successfully fetched.'
  })
}

export async function updateProfile(req: Request, res: Response): Promise<any> {
  res.status(401).json({
    status: 401,
    message: 'Permission not authorized.'
  })
}