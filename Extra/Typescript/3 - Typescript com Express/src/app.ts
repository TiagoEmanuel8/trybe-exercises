import express from 'express';
import restaurantRouter from './routes/restaurants';

const app = express();
app.use(express.json());

app.use('/restaurants',restaurantRouter);
app.use('/', (_req, res) => res.sendStatus(200));

export default app