<script setup lang="ts">
import Card from "../Card.vue";
import SingleHour from "../HourlyForecast/SingleHour.vue";
import type { WeatherData } from "../../interfaces/weather.interface";

defineProps<{
    hourlyData: WeatherData[];
}>();
</script>

<template>
    <Card>
        <div class="title">Next hours</div>
        <div class="horizontal-container">
            <SingleHour
                v-for="hour in hourlyData"
                :key="hour.dt"
                v-if="hourlyData"
                :singleHourData="hour"
                :isLast="hourlyData.indexOf(hour) === hourlyData.length - 1"
            />
        </div>
    </Card>
</template>

<style scoped>
.horizontal-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow-x: scroll;
}
</style>
