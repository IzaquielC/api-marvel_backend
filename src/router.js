import { Router } from 'express';
import UseController from './app/controllers/UseController';

const routes = new Router();

routes.get('/', UseController.getCharacters);

export default routes;
