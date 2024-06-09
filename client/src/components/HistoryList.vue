<template>
    <Spinner :loadingStatus="loadingStatus">
        <ul class="history-list">
            <AppointmentItem
                v-for="appointment in historyListAllAppointments"
                :key="appointment._id"
                :appointment="appointment"
                class="history-list__appointment"
            />
        </ul>
    </Spinner>
</template>

<script setup lang="ts">
import AppointmentItem from './AppointmentItem.vue';
import { useHistoryService } from '@/modules/history/service/history.service';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import Spinner from './Spinner.vue';

const { getHistoryListAllAppointments } = useHistoryService();
const { historyListAllAppointments, loadingStatus } =
    storeToRefs(useHistoryService());

onMounted(() => {
    getHistoryListAllAppointments();
});
</script>

<style scoped lang="scss">
.history-list {
    display: flex;
    // grid-template-columns: repeat(auto-fit);
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

.history-list__appointment {
    margin: 0;
}
</style>
