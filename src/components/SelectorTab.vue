<script setup lang="ts">
import { useStore } from "../config/store";
import { DEFAULT_LOCATIONS } from "../constants/default-locations";

const { selectedLocation, setSelectedLocation } = useStore();
</script>

<template>
    <div class="horizontal-container">
        <div
            class="location-item"
            :class="{
                'location-item--selected': location === selectedLocation,
            }"
            v-for="location in DEFAULT_LOCATIONS"
            :key="location"
            @click="setSelectedLocation(location)"
        >
            {{ location }}
        </div>
    </div>
</template>

<style scoped>
.horizontal-container {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 10px;
    gap: 12px;
    border-radius: 5px;
}

.location-item {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.location-item--selected {
    background-color: #fff1d5;
    font-weight: 600;
}
</style>
