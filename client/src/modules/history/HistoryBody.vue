<template>
    <div class="history-body">
        <section class="history-body__filter">
            <Calendar />
        </section>
        <section class="history-body__content">
            <HistoryList />
        </section>
    </div>
</template>

<script setup lang="ts">
import Calendar from '@/modules/calendar/Calendar.vue';
import HistoryList from '@/components/HistoryList.vue';
</script>

<style scoped lang="scss">
.history-body {
    padding-top: 30px;

    &__filter {
        margin-bottom: 40px;
        display: flex;
        gap: 10px;
    }

    &__content {
        :deep(.appointment) {
            height: 205px;
            width: 250px;
        }
    }
}
</style>
