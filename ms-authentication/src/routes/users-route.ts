import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import bearerAuthenticationMiddleware from '../middlewares/jwt-authentication-middleware';
import DatabaseError from '../models/errors/database-error-model';
import userRepository from '../repositories/user-repository';

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAll();

    res.status(StatusCodes.OK).send(users);
})

usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    try {
        const { uuid } = req.params;

        const user = await userRepository.findById(uuid);

        res.status(StatusCodes.OK).send(user);

    } catch (error) {
        next(error);
    }
})

usersRoute.post('/users', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const newUser = req.body;

    const uuid = await userRepository.create(newUser);

    res.status(StatusCodes.CREATED).send(uuid);
})

usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {

    const { uuid } = req.params;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    await userRepository.update(modifiedUser);

    res.status(StatusCodes.OK).send(modifiedUser);
})

usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { uuid } = req.params;

    await userRepository.delete(uuid);

    res.sendStatus(StatusCodes.OK)
})

export default usersRoute;