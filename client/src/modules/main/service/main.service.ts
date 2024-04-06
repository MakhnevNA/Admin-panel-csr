import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ISheduleListAppointments } from '../types';
import { getAllAppoinments } from './main.transport';

export const useSheduleService = defineStore('sheduleService', () => {
    const sheduleListAppointments = ref<ISheduleListAppointments[]>();

    const setSheduleListAppointments = (data: ISheduleListAppointments[]) => {
        sheduleListAppointments.value = data;
    };

    const getSheduleListAppointments = async () => {
        const appointments = await getAllAppoinments();
        setSheduleListAppointments(appointments);
    };

    return {
        getSheduleListAppointments,
        sheduleListAppointments,
    };
});
