import { NextFunction } from "express";

export interface ExpressRootError extends Error {
    message: string,
    status?: number
}

export interface ListeningError extends Error {
    syscall: string,
    code: string,
}




