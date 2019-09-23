import { getService } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';
import { WeatherDataSource } from '../datasources';

export interface GetWeatherResponse {
  result: {
  };
}

export interface GetCitiesByCountryResponse {
  result: {
  };
}

export interface GetWeatherRequest {
  CityName: string;
  CountryName: string;
}

export interface GetCitiesByCountryRequest {
  CountryName: string;
}

export interface Weather {
  GetWeather(args: GetWeatherRequest): Promise<GetWeatherResponse>;
  GetCitiesByCountry(args: GetCitiesByCountryRequest): Promise<GetCitiesByCountryResponse>;
}

export class WeatherProvider implements Provider<Weather> {
  constructor(
    // weather must match the name property in the datasource json file
    @inject('datasources.weather')
    protected dataSource: WeatherDataSource = new WeatherDataSource(),
  ) { }

  value(): Promise<Weather> {
    return getService(this.dataSource);
  }
}
