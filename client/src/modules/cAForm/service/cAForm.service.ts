import { defineStore } from 'pinia';
import { ref } from 'vue';

import { TLodaidngStatus } from '@/shared/types';
import { ICAForm } from '../types';
import { addNewAppointment } from './cAForm.transport';
import { useSheduleService } from '@/modules/main/service/main.service';

export const useCAFormService = defineStore('cAFormService', () => {
    const loadingStatus = ref<TLodaidngStatus>('idle');

    const { getSheduleListActiveAppointments } = useSheduleService();

    const requestCAFormData = async (bodyData: ICAForm) => {
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
        requestCAFormData,
    };
});
