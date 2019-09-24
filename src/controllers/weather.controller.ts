import { inject } from '@loopback/core';
import { Request, RestBindings, get, param, ResponseObject, HttpErrors } from '@loopback/rest';
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

  @get('/weather/')
  async getWeather(
    @param.query.string('CityName') CityName: string,
    @param.query.string('CountryName') CountryName: string,
  ): Promise<GetWeatherResponse> {
    if (CountryName == null || CountryName == "") {
      throw new HttpErrors.PreconditionFailed('Country name is mandetory')
    } else if (CityName == null || CityName == "") {
      throw new HttpErrors.PreconditionFailed('City name is mandetory')
    }
    return this.weather.GetWeather(<GetWeatherRequest>{
      CityName,
      CountryName,
    });
  }
  @get('/weather/cities/{CountryName}')
  async getCities(
    @param.path.string('CountryName') CountryName: string,
  ): Promise<GetCitiesByCountryResponse> {
    if (CountryName == null || CountryName == "") {
      throw new HttpErrors.PreconditionFailed('Country name is mandetory')
    }
    return this.weather.GetCitiesByCountry(<GetCitiesByCountryRequest>{
      CountryName,
    });
  }
}
