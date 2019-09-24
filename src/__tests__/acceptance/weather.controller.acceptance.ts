import { Client, expect } from '@loopback/testlab';
import { WeatherApplication } from '../..';
import { setupApplication } from './test-helper';

describe('PingController', () => {
  let app: WeatherApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({ app, client } = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /weather/cities/AU', async () => {
    const res = await client.get('/weather/cities/AU').expect(200);

  });
  it('invokes GET /weather?CityName=MEL&CountryName=AU', async () => {
    const res = await client.get('/weather?CityName=MEL&CountryName=AU').expect(200);
  });

  it('invokes GET /weather?CityName=MEL&CountryName=', async () => {
    const res = await client.get('/weather?CityName=MEL&CountryName=').expect(412);
  });
  it('invokes GET /weather?CityName=&CountryName=AU', async () => {
    const res = await client.get('/weather?CityName=&CountryName=AU').expect(412);
  });
});
