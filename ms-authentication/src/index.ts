import express from 'express';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication-middleware';
import errorHandler from './middlewares/error-handler-middleware';
import authorizationRoute from './routes/authorization-route';
import statusRoute from './routes/status-route';
import usersRoute from './routes/users-route';

const app = express();

//Application settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes settings
app.use(statusRoute);
app.use(authorizationRoute);

app.use(jwtAuthenticationMiddleware);
app.use(usersRoute);


//Error handler settings
app.use(errorHandler);

//Server startup
app.listen(3000, () => {
    console.log('Server is running on port 3000!')
});


