export interface City {
  id: number;
  name : string
  coord: {
    lon: number;
    lat: number;
  };
  //   main: Main;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Current {
  timezone: string;
  cod: number;
  timezone_offset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
  };
  hourly: Hourly[];
  daily: Daily[];
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Hourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  weather: Weather[];
}
export interface Daily {
  dt: number;
  temp: Temp;
  feels_like: FeelLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  clouds: number;
  rain: number;
  weather: Weather[];
}

export interface FeelLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
}
export interface Wind {
  speed: number;
  deg: number;
}




