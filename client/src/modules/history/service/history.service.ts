import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getAllAppoinments } from './history.transport';
import { IHistoryListAllAppointments } from '../types';
import { TLodaidngStatus } from '@/shared/types';

export const useHistoryService = defineStore('historyService', () => {
    const historyListAllAppointments = ref<IHistoryListAllAppointments[]>();
    const loadingStatus = ref<TLodaidngStatus>('idle');

    const setSheduleListAppointments = (
        data: IHistoryListAllAppointments[],
    ) => {
        historyListAllAppointments.value = data;
    };

    const getHistoryListAllAppointments = async () => {
        try {
            loadingStatus.value = 'loading';
            const appointments = await getAllAppoinments();
            setSheduleListAppointments(appointments);
            loadingStatus.value = 'idle';
        } catch (e) {
            loadingStatus.value = 'error';
            throw e;
        }
    };

    return {
        historyListAllAppointments,
        loadingStatus,
        getHistoryListAllAppointments,
    };
});
