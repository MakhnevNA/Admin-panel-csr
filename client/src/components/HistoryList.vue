<template>
    <Spinner :loadingStatus="loadingStatus">
        <AppointmentItem
            v-for="appointment in historyListAllAppointments"
            :key="appointment._id"
            :appointment="appointment"
        />
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

<style scoped lang="scss"></style>
