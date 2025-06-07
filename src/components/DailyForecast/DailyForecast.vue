<script setup lang="ts">
import type { WeatherData } from "../../interfaces/weather.interface";
import Card from "../Card.vue";

defineProps<{
    dailyData: WeatherData;
}>();
</script>

<template><Card></Card></template>

<style scoped></style>
