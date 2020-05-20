import App from '../src/app';
import { expect } from 'chai';
import fetch from 'node-fetch';
import { httpPort, httpHost } from '../src/config'

const app = new App();

describe('API', () => {
  before(done => {
    app.listen(httpPort, () => {

      done();
    });
  });

  it('/api/ping', async () => {
    const { status } = await fetch(`http://${httpHost}:${httpPort}/api/ping`);
    expect(status).to.be.equal(200);
  });
});