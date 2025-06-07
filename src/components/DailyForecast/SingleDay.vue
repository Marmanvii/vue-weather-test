<script setup lang="ts">
import { capitalize } from "vue";
import type { WeatherData } from "../../interfaces/weather.interface";
import { formatDateShort } from "../../utils/utils";

defineProps<{
    dayData: WeatherData;
}>();
</script>

<template>
    <div class="horizontal-container">
        <img
            :src="`https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`"
            alt="Weather Icon"
        />
        <div class="date-container">
            <div>{{ formatDateShort(dayData.dt) }}</div>
            <div class="date">
                {{
                    `${capitalize(dayData.weather[0].description)} throughout the day`
                }}
            </div>
        </div>
        <div class="temperature-container">
            <div class="degrees">
                {{ Math.floor(dayData.main.temp_min) }}°
                {{ Math.floor(dayData.main.temp_max) }}°
            </div>
        </div>
    </div>
</template>

<style scoped>
.horizontal-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
}

.date-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.date {
    font-size: 14px;
    color: #666;
}

.temperature-container {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
}
</style>
