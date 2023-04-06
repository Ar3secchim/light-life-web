import {routes} from './routes.js';
import express  from 'express';

const app = express()
const port = 3333

app.use(express.json())
app.use(routes)

app.listen({port}, () => {
  console.log(`🔥 Server running on port http://localhost:${port}`);
})