<template>
    <section class="history">
        <div class="history__controls">
            <Calendar />
        </div>
        <div class="history__list">
            <HistoryList />
        </div>
    </section>
</template>

<script setup lang="ts">
import Calendar from '@/components/Calendar.vue';
import HistoryList from '@/components/HistoryList.vue';
</script>

<style scoped lang="scss">
.history {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;

    &__list {
        display: flex;
        flex-wrap: wrap;
        max-width: 500px;
        gap: 20px;

        :deep(.appointment) {
            height: 180px;
            width: 240px;
        }
    }
}
</style>
@/modules/history/service/main.service
