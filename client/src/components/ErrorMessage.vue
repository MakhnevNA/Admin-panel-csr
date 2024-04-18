<template>
    <img
        :style="{
            display: 'block',
            width: '250px',
            height: '250px',
            objectFit: 'contain',
            margin: '50px auto 0',
        }"
        :src="errorMessage"
        alt="errorMessage"
    />
</template>

<script setup lang="ts">
import errorMessage from '@/assets/error.gif';
</script>

<style scoped lang="scss"></style>
