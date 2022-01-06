import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../models/errors/database-error-model";
import ForbiddenError from "../models/errors/forbidden-error-model";
import UnauthorizedError from "../models/errors/unauthorized-error-model";

function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if (error instanceof DatabaseError)
        res.sendStatus(StatusCodes.BAD_REQUEST);
    else if (error instanceof ForbiddenError)
        res.sendStatus(StatusCodes.FORBIDDEN);
    else if (error instanceof UnauthorizedError)
        res.sendStatus(StatusCodes.UNAUTHORIZED);
    else
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
}

export default errorHandler;