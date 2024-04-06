<template>
    <AppointmentItem
        v-for="appointment in sheduleListAppointments"
        :key="appointment._id"
        :appointment="appointment"
    />
</template>

<script setup lang="ts">
import AppointmentItem from './AppointmentItem.vue';

import { useSheduleService } from '@/modules/main/service/main.service';
import { storeToRefs } from 'pinia';

const { sheduleListAppointments } = storeToRefs(useSheduleService());
</script>

<style scoped lang="scss"></style>
