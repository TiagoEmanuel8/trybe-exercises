import Express, { json } from 'express';
import userRouter from './router/userRouter';

const app = Express();
app.use(json());

app.get('/', (req, res) => res.send('Hello Word!!!'));
app.use('/users', userRouter);

export default app;
