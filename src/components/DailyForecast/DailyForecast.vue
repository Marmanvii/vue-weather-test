<script setup lang="ts">
import type { WeatherData } from "../../interfaces/weather.interface";
import Card from "../Card.vue";
import SingleDay from "./SingleDay.vue";

defineProps<{
    dailyData: WeatherData[];
}>();
</script>

<template>
    <Card>
        <div class="vertical-container">
            <SingleDay
                :dayData="singleDayData"
                v-for="singleDayData in dailyData"
            />
        </div>
    </Card>
</template>

<style scoped>
.vertical-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}
</style>
