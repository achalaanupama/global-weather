import { inject, bind, BindingScope } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as config from './weather.datasource.json';


export class WeatherDataSource extends juggler.DataSource {
  static dataSourceName = 'weather';

  constructor(
    @inject('datasources.config.weather', { optional: true })
    dsConfig: object = config,
  ) {
    dsConfig = Object.assign({}, dsConfig, {
      connector: require('loopback-connector-soap'),
    });
    super(dsConfig);
  }
}
