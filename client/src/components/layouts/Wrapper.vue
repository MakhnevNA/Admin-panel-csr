<template>
    <div class="wrapper">
        <Header />
        <main class="main">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/Header.vue';
</script>

<style scoped lang="scss">
.wrapper {
    position: relative;
    max-width: 1200px;
    margin: 50px auto 50px auto;
    padding: 10px 150px 100px 150px;
    background: linear-gradient(
        241.22deg,
        #fff3df 3.04%,
        rgba(247, 228, 221, 0.9) 97.58%
    );
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.25);
}
</style>
