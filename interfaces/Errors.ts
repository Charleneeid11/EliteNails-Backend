import { NextFunction } from "express";

export interface ExpressRootError extends Error {
    message: string,
    status?: number
}

