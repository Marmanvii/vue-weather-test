<script setup lang="ts">
import { ref, watch } from "vue";
import { useStore } from "../config/store";
import HourlyForecast from "./HourlyForecast/HourlyForecast.vue";
import SelectorTab from "./SelectorTab.vue";
import { getLocationData } from "../api/get-location.query.ts";
import type { LocationData } from "../interfaces/location.interface";
import type {
    WeatherDataResponse,
    WeatherData,
} from "../interfaces/weather.interface";
import { getWeatherByLocation } from "../api/get-weather.query";
import DailyForecast from "./DailyForecast/DailyForecast.vue";

const { selectedLocation, currentCoordinates } = useStore();
const weatherData = ref<WeatherData[]>([]);
const hourlyForecast = ref<WeatherData[]>([]);
const dailyForecast = ref<WeatherData[]>([]);

watch(
    selectedLocation,
    async (newLocation) => {
        if (!newLocation) return;

        try {
            const response: LocationData = await getLocationData(newLocation);
            const locationData = response.data[0];

            if (!locationData?.lat || !locationData?.lon) return;

            currentCoordinates.value.lat = locationData.lat;
            currentCoordinates.value.lon = locationData.lon;

            const weather: WeatherDataResponse = await getWeatherByLocation(
                locationData.lat,
                locationData.lon,
            );

            weatherData.value = weather.data.list;
            //Given API restrictions, I'll only take the first 8 values (as they are given by a 3 hours interval)
            hourlyForecast.value = weather.data.list.slice(1, 9);
            //Given API restrictions, i is multipled by 8 so it represents a day (as they are given by a 3 hours interval)
            dailyForecast.value = Array.from(
                { length: 5 },
                (_, i) => weather.data.list[i * 8],
            ).filter(Boolean);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    },
    {
        immediate: true,
    },
);
</script>

<template>
    <SelectorTab />
    <HourlyForecast :hourly-data="hourlyForecast" />
    <DailyForecast :daily-data="dailyForecast" />
</template>

<style lang="scss"></style>
