import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ISheduleListActiveAppointments } from '../types';
import { getActiveAppoinments } from './main.transport';
import dayjs from 'dayjs';
import { TLodaidngStatus } from '@/shared/types';

export const useSheduleService = defineStore('useSheduleService', () => {
    const sheduleListActiveAppointments =
        ref<ISheduleListActiveAppointments[]>();

    const loadingStatus = ref<TLodaidngStatus>('idle');

    const setSheduleListActiveAppointments = (
        data: ISheduleListActiveAppointments[],
    ) => {
        sheduleListActiveAppointments.value = data;
    };

    const getSheduleListActiveAppointments = async () => {
        try {
            loadingStatus.value = 'loading';
            const appointments = await getActiveAppoinments();

            const filteredAppointments = appointments.filter((item) => {
                return dayjs(item.date).diff(undefined, 'minute') > 0;
            });
            setSheduleListActiveAppointments(filteredAppointments);
            loadingStatus.value = 'idle';
        } catch (e) {
            loadingStatus.value = 'error';
            throw e;
        }
    };

    return {
        sheduleListActiveAppointments,
        loadingStatus,
        getSheduleListActiveAppointments,
    };
});
