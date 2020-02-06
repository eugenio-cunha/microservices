import { expect } from 'chai';

import app from '../src/app';
import fetch from 'node-fetch';

const host = '127.0.0.1';
const port = process.env.HTTP_PORT || 3000;

describe('API', (): void => {
  before(done => {
    app.listen(port, (): void => {

      done();
    });
  });

  it('/api/ping', async (): Promise<void> => {
    const { status } = await fetch(`http://${host}:${port}/api/ping`);
    expect(status).to.be.equal(200);
  });
});