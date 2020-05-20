import cors from 'cors';
import routes from './api/routes';
import express, { json, urlencoded, Application } from 'express';

export default class App {

  public express: Application;

  public constructor() {
    this.express = express();
    this.express.disable('x-powered-by');
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(urlencoded({ extended: true }));
    this.express.use(json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use('/api/', routes);
  }

  public listen(port: number | string, callback: () => void) {
    this.express.listen(port, callback);
  }
}
