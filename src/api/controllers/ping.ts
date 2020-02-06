import { Request, Response } from 'express';

class Ping {

  public test(req: Request, res: Response): any {
    return res.json({
        pong: new Date()
      }
    );
  }
}

export default new Ping();
