import {Router} from 'express';
import { findAll } from './controllers/users/getUsers.js';

export const routes = Router()

routes.get('/', findAll)
