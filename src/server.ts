import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET: search information
// POST: create new information
// PUT: att information
// DELETE: delete information

// Request body: date for create or att of information
// Route Params: identify the resource that i want att or delete
// Query Params: for filter, order, etc...

app.listen(3333);
