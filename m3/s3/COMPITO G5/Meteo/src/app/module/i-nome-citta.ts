export interface iNomeCitta {
  cod: string;
  message: number;
  cnt: number;
  list: [];
  city: string;

  dt: number;
  main: {};
  weather: [];
  clouds: string;
  wind: string;
  visibility: number;
  pop: number;

  dt_txt: string;

  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;

  description: string;
  icon: string;

  all: number;

  speed: number;
  deg: number;
  gust: number;

  '3h': number;

  pod: string;

  id: number;
  name: string;

  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;

  lat: number;
  lon: number;
}
