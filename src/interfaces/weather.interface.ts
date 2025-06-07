export interface WeatherData {
  dt: number;
  main: {
    temp: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

export interface WeatherDataResponse {
  data: {
    list: WeatherData[];
  };
}
