export interface Location {
  id: number;
  name: string;
  lat: number;
  lon: number;
}

export interface LocationData {
  data: Location[];
}
