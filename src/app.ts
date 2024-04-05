import express from 'express';
import userRouter from './routes/user.route';
import profileRouter from './routes/profile.route';
import employeeRouter from './routes/employee.route';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/profile", profileRouter);
app.use("/api/employee", employeeRouter);

export default app;
