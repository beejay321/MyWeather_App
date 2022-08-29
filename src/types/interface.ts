export interface Location {
  // location: {
  country: string;
  name: string;
  localtime: string;
  // lat: number;
  localtime_epoch: number;
  // lon: number;
  // region: string;
  // tz_id: string;
  // };
}
export interface Current {
  // current: {
  // cloud: number;
  condition: {
    text: string;
    icon: string;
    // code: number;
  };
  // feelslike_c: number;
  // feelslike_f: number;
  // gust_kph: number;
  // gust_mph: number;
  humidity: number;
  // is_day: number;
  // last_updated: string;
  // last_updated_epoch: number;
  // precip_in: number;
  // precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  // vis_miles: number;
  // wind_degree: number;
  // wind_dir: string;
  wind_kph: number;
  // wind_mph: number;
  // };
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
  };
  astro: {
    sunrise: string;
    sunset: string;
  };
  hour: Hour[];
}

export interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  // is_day: number;
  condition: {
    text: string;
    icon: string;
    // code: number;
  };
  // wind_mph: number;
  // wind_kph: number;
  // wind_degree: number;
  // wind_dir: string;
  // pressure_mb: number;
  // pressure_in: number;
  // precip_mm: number;
  // precip_in: number;
  // humidity: number;
  // cloud: number;
  // feelslike_c: number;
  // feelslike_f: number;
  // windchill_c: number;
  // windchill_f: number;
  // heatindex_c: number;
  // heatindex_f: number;
  // dewpoint_c: number;
  // dewpoint_f: number;
  // will_it_rain: number;
  // chance_of_rain: number;
  // will_it_snow: number;
  // chance_of_snow: number;
  // vis_km: number;
  // vis_miles: number;
  // gust_mph: number;
  // gust_kph: number;
  // uv: number;
}
export interface City {
  id: number;
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

// export interface Current {
//   timezone: string;
//   cod: number;
//   timezone_offset: number;
//   current: {
//     dt: number;
//     sunrise: number;
//     sunset: number;
//     temp: number;
//     feels_like: number;
//     pressure: number;
//     humidity: number;
//     dew_point: number;
//     clouds: number;
//     visibility: number;
//     wind_speed: number;
//     wind_deg: number;
//     wind_gust: number;
//     weather: Weather[];
//   };
//   hourly: Hourly[];
//   daily: Daily[];
// }

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
