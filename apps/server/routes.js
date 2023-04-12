import {Router} from 'express';
import { create, findAll } from './controllers/users/index.js';

export const routes = Router()

routes.get('/', findAll)
routes.post('/', create)