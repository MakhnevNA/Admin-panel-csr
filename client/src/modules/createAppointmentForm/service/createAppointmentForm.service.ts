import { defineStore } from 'pinia';
import { ref } from 'vue';

import { TLodaidngStatus } from '@/shared/types';
import { ICreateAppointmentForm } from '../types';
import { addNewAppointment } from './createAppointmentForm.transport';
import { useSheduleService } from '@/modules/main/service/main.service';

export const useCreateAppointmentFormService = defineStore(
    'createAppointmentFormService',
    () => {
        const loadingStatus = ref<TLodaidngStatus>('idle');

        const { getSheduleListActiveAppointments } = useSheduleService();

        const requestCreateAppointmentFormServiceData = async (
            bodyData: ICreateAppointmentForm,
        ) => {
            try {
                loadingStatus.value = 'loading';
                const request = await addNewAppointment(bodyData);
                if (request) {
                    getSheduleListActiveAppointments();
                }
                loadingStatus.value = 'idle';
            } catch (e) {
                loadingStatus.value = 'error';
                throw e;
            }
        };

        return {
            loadingStatus,
            requestCreateAppointmentFormServiceData,
        };
    },
);
