import cors from 'cors';
import express from 'express';
import routes from './routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.express.disable('x-powered-by');
    this.middlewares();
    this.routes();
  }

  public middlewares(): void {
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
    this.express.use(cors());
  }

  public routes(): void {
    this.express.use('/api/', routes);
  }
}

const { express: app } = new App();

export default app;
