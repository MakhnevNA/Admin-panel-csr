<template>
    <Spinner :loadingStatus="loadingStatus">
        <AppointmentItem
            v-for="appointment in sheduleListActiveAppointments"
            :key="appointment._id"
            :appointment="appointment"
        />
    </Spinner>
</template>

<script setup lang="ts">
import AppointmentItem from './AppointmentItem.vue';
import { useSheduleService } from '@/modules/main/service/main.service';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import Spinner from '@/components/Spinner.vue';

const { sheduleListActiveAppointments, loadingStatus } =
    storeToRefs(useSheduleService());
const { getSheduleListActiveAppointments } = useSheduleService();

onMounted(() => {
    getSheduleListActiveAppointments();
});
</script>

<style scoped lang="scss"></style>
