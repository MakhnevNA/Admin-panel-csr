<template>
    <Spinner :loadingStatus="loadingStatus">
        <ul class="main-list">
            <AppointmentItem
                v-for="appointment in sheduleListActiveAppointments"
                :key="appointment._id"
                :appointment="appointment"
                class="main-list__appointment"
            />
        </ul>
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

onMounted(async () => {
    await getSheduleListActiveAppointments();
});
</script>

<style scoped lang="scss">
.main-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
