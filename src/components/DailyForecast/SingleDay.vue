<script setup lang="ts">
import type { WeatherData } from "../../interfaces/weather.interface";

defineProps<{
    dayData: WeatherData;
}>();
</script>

<template>
    <div class="horizontal-container"></div>
</template>

<style scoped></style>
