import axios from 'axios';

import { WeatherResp } from '@types';

export type getCurrentWeatherParams = {
  latitude: number;
  longitude: number;
};

export async function getCurrentWeather({ latitude, longitude }: getCurrentWeatherParams) {
  const params = {
    latitude,
    longitude,
    current_weather: true,
  };

  const result = await axios.get<WeatherResp>('https://api.open-meteo.com/v1/forecast', { params });

  return result.data;
}

export async function getHourlyWeather({ latitude, longitude }: getCurrentWeatherParams) {
  const params = {
    latitude,
    longitude,
    // eslint-disable-next-line max-len
    hourly: 'temperature_2m,windspeed_10m,winddirection_10m,weathercode,is_day,apparent_temperature,pressure_msl,relativehumidity_2m',
    timezone: 'auto',
  };

  const result = await axios.get<WeatherResp>('https://api.open-meteo.com/v1/forecast', { params });

  return result.data;
}

export async function getDailyWeather({ latitude, longitude }: getCurrentWeatherParams) {
  const params = {
    latitude,
    longitude,
    daily: 'sunrise,sunset,precipitation_sum,uv_index_max,uv_index_clear_sky_max',
    timezone: 'auto',
  };

  const result = await axios.get<WeatherResp>('https://api.open-meteo.com/v1/forecast', { params });

  return result.data;
}
