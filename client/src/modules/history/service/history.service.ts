import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getAllAppoinments } from './history.transport';
import { IHistoryListAllAppointments } from '../types';

export const useHistoryService = defineStore('historyService', () => {
    const historyListAllAppointments = ref<IHistoryListAllAppointments[]>();

    const setSheduleListAppointments = (
        data: IHistoryListAllAppointments[],
    ) => {
        historyListAllAppointments.value = data;
    };

    const getHistoryListAllAppointments = async () => {
        const appointments = await getAllAppoinments();
        setSheduleListAppointments(appointments);
    };

    return {
        historyListAllAppointments,
        getHistoryListAllAppointments,
    };
});
