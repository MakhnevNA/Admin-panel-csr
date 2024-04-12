import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ISheduleListActiveAppointments } from '../types';
import { getActiveAppoinments } from './main.transport';
import dayjs from 'dayjs';

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

        const filteredAppointments = appointments.filter((item) => {
            return dayjs(item.date).diff(undefined, 'minute') > 0;
        });
        setSheduleListActiveAppointments(filteredAppointments);
    };

    return {
        sheduleListActiveAppointments,
        getSheduleListActiveAppointments,
    };
});
