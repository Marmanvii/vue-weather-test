<script lang="ts" setup>
import type { WeatherData } from "../../interfaces/weather.interface";
import { formatTime } from "../../utils/utils";

defineProps<{
    singleHourData: WeatherData;
    isLast: boolean;
}>();
</script>

<template>
    <div class="hour-container" v-if="singleHourData">
        <div class="vertical-container">
            <div class="degrees">
                {{ Math.floor(singleHourData.main.temp) }}°C
            </div>
            <div class="humidity">{{ singleHourData.main.humidity }}%</div>
            <img
                :src="`https://openweathermap.org/img/wn/${singleHourData.weather[0].icon}@2x.png`"
                alt="Weather Icon"
            />
            <div class="time">{{ formatTime(singleHourData.dt) }}</div>
        </div>
    </div>
    <div class="divider" v-if="!isLast"></div>
</template>

<style scoped>
.hour-container {
    display: flex;
    align-items: center;
    height: 100%;
}

.vertical-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
}

.humidity {
    font-size: 1.5rem;
    font-weight: semi-bold;
    color: #8dd8ff;
}

.time {
    font-size: 1.5rem;
    font-weight: semi-bold;
    color: #9fb3df;
}
.divider {
    width: 1px;
    height: 80px;
    background-color: #9fb3df;
}
</style>
