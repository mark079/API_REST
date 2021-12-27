import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

class App {
  constructor() {
    this.app = express();
    this.middleawares();
    this.routes();
  }

  middleawares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}
export default new App().app;
