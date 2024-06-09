import { defineStore } from 'pinia';
import { ref } from 'vue';

import { TLodaidngStatus } from '@/shared/types';
import {
    ICreateAppointmentForm,
    IMastersRequestBody,
    IMastersResponce,
    IProceduresRequestBody,
    IProceduresResponce,
    ITimesRequestBody,
    ITimesResponce,
} from '../types';
import {
    addNewAppointment,
    getAvailableMasters,
    getAvailableProcedures,
    getAvailableTimes,
} from './createAppointmentForm.transport';
import { useSheduleService } from '@/modules/main/service/main.service';

export const useCreateAppointmentFormService = defineStore(
    'createAppointmentFormService',
    () => {
        const loadingStatus = ref<TLodaidngStatus>('idle');
        const availableProcedures = ref<IProceduresResponce[]>([]);
        const availableMasters = ref<IMastersResponce[]>([]);
        const availableTimes = ref<ITimesResponce[]>([]);

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

        const setAvailableProcedures = async (data: IProceduresRequestBody) => {
            try {
                loadingStatus.value = 'loading';
                availableProcedures.value = await getAvailableProcedures(data);
                loadingStatus.value = 'idle';
            } catch (e) {
                loadingStatus.value = 'error';
                throw e;
            }
        };

        const setAvailableMasters = async (data: IMastersRequestBody) => {
            try {
                loadingStatus.value = 'loading';
                availableMasters.value = await getAvailableMasters(data);
                loadingStatus.value = 'idle';
            } catch (e) {
                loadingStatus.value = 'error';
                throw e;
            }
        };

        const setAvailableTimes = async (data: ITimesRequestBody) => {
            try {
                loadingStatus.value = 'loading';
                availableTimes.value = await getAvailableTimes(data);
                loadingStatus.value = 'idle';
            } catch (e) {
                loadingStatus.value = 'error';
                throw e;
            }
        };

        return {
            loadingStatus,
            requestCreateAppointmentFormServiceData,
            availableProcedures,
            availableMasters,
            availableTimes,
            setAvailableTimes,
            setAvailableProcedures,
            setAvailableMasters,
        };
    },
);
