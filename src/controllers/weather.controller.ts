import { inject } from '@loopback/core';
import { get, param, HttpErrors } from '@loopback/rest';
import {
  GetWeatherResponse,
  GetCitiesByCountryResponse,
  GetWeatherRequest,
  GetCitiesByCountryRequest,
  Weather,
} from '../services/weather.service';

export class WeatherController {
  constructor(
    @inject('services.Weather')
    protected weather: Weather,
  ) { }

  @get('/weather/city/{CityName}/country/{CountryName}')
  async multiply(
    @param.path.string('CityName') CityName: string,
    @param.path.string('CountryName') CountryName: string,
  ): Promise<GetWeatherResponse> {
    if (CountryName == "" || CityName == "") {
      throw new HttpErrors.PreconditionFailed('Country Name and City is mandetory')
    }
    return this.weather.GetWeather(<GetWeatherRequest>{
      CityName,
      CountryName,
    });
  }
  @get('/weather/country/{CountryName}')
  async add(
    @param.path.string('CountryName') CountryName: string,
  ): Promise<GetCitiesByCountryResponse> {
    if (CountryName == "") {
      throw new HttpErrors.PreconditionFailed('Country name is mandetory')
    }
    return this.weather.GetCitiesByCountry(<GetCitiesByCountryRequest>{
      CountryName,
    });
  }
}
