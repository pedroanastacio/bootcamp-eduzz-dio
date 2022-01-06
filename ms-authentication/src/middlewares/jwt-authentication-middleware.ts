//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjQxNDcwNjQyLCJzdWIiOiIyZTgzYzRjOC1jZGFjLTQxMDMtODQ3NS05MmFiM2EzN2JiMDkifQ.Jyl2AiaWIws-PdOBV6GGndGRPEqdZ4yWlkHV7b2adsQ

import { NextFunction, Response, Request } from "express";
import ForbiddenError from "../models/errors/forbidden-error-model";
import JWT from 'jsonwebtoken';
import { secretKey } from "../settings";
import UnauthorizedError from "../models/errors/unauthorized-error-model";

export default async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers['authorization'];

        if (!authorizationHeader)
            throw new ForbiddenError('Credentials not entered');

        const [authenticationType, token] = authorizationHeader.split(' ');

        if (authenticationType !== 'Bearer' || !token)
            throw new ForbiddenError('Invalid authentication type');

        try {
            const tokenPayload = JWT.verify(token, secretKey);

            if (typeof tokenPayload !== 'object' || !tokenPayload.sub)
                throw new ForbiddenError('Invalid token');

            const user = {
                uuid: tokenPayload.sub,
                username: tokenPayload.username
            };

            req.user = user;
            next();

        } catch (error) {
            throw new UnauthorizedError('Invalid token');
        }
    } catch (error) {
        next(error);
    }
}