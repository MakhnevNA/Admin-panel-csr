import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ISheduleListActiveAppointments } from '../types';
import { getActiveAppoinments } from './main.transport';

export const useSheduleService = defineStore('useSheduleService', () => {
    const sheduleListActiveAppointments =
        ref<ISheduleListActiveAppointments[]>();

    const setSheduleListActiveAppointments = (
        data: ISheduleListActiveAppointments[],
    ) => {
        sheduleListActiveAppointments.value = data;
    };

    const getSheduleListActiveAppointments = async () => {
        const appointments = await getActiveAppoinments();
        setSheduleListActiveAppointments(appointments);
    };

    return {
        sheduleListActiveAppointments,
        getSheduleListActiveAppointments,
    };
});
