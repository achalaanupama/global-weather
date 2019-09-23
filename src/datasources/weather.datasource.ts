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
      // A workaround for the current design flaw where inside our monorepo,
      //  packages/service-proxy/node_modules/loopback-datasource-juggler cannot
      //  see/load the connector from examples/soap/node_modules/loopback-connector-soap
      //  as explained in todo example
      connector: require('loopback-connector-soap'),
    });
    super(dsConfig);
  }
}
