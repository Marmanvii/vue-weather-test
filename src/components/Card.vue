<script setup lang="ts"></script>

<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style scoped>
.container {
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}
</style>
