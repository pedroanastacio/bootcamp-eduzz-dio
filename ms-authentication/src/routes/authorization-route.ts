import { NextFunction, Request, Response, Router } from "express";
import ForbiddenError from "../models/errors/forbidden-error-model";
import JWT from 'jsonwebtoken';
import { secretKey } from "../settings";
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication-middleware";
import jwtAuthenticationMiddleware from "../middlewares/jwt-authentication-middleware";

const authorizationRoute = Router();

authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user } = req;

        if(!user)
            throw new ForbiddenError('Uninformed user');

        const jwtPayload = { username: user.username };
        const jwtOptions = { subject: user?.uuid }
        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

        res.status(StatusCodes.OK).json({ token: jwt });

    } catch (error) {
        next(error);
    }
});

export default authorizationRoute;