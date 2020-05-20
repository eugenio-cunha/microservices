import { Router } from 'express';
import { Ping } from './controllers';

const routes = Router();

/**
 * @api {get} /ping Testa a acessibilidade de um microsserviço em um host.
 * @apiVersion 1.0.0
 * @apiName GetAPI
 * @apiGroup API
 *
 * @apiSuccess {Object} body Horário que a requisição foi respondida no servidor.
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "pong": "2020-02-05T15:39:43.587Z"
 *   }
 */
routes.get('/ping', Ping.test);

export default routes;
