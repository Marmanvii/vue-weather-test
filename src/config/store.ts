import { ref } from "vue";
import { DEFAULT_LOCATIONS } from "../constants/default-locations";

const selectedLocation = ref(DEFAULT_LOCATIONS[0]);
const currentCoordinates = ref({ lat: 0, lon: 0 });
const isLoading = ref(false);

function setSelectedLocation(location: string) {
  selectedLocation.value = location;
}

function setCurrentCoordinates(coordinates: { lat: number; lon: number }) {
  currentCoordinates.value = coordinates;
}

function setIsLoading(isLoading: boolean) {
  isLoading = isLoading;
}

export function useStore() {
  return {
    selectedLocation,
    currentCoordinates,
    isLoading,
    setSelectedLocation,
    setCurrentCoordinates,
    setIsLoading,
  };
}
