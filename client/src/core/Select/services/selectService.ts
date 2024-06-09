import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TLodaidngStatus } from '@/shared/types';
import {
    IMastersRequestBody,
    IMastersResponce,
    IProceduresRequestBody,
    IProceduresResponce,
} from '../types';
import {
    getAvailableMasters,
    getAvailableProcedures,
} from './select.transport';

export const useGetAvailableSelectData = defineStore(
    'getAvailableSelectData',
    () => {
        const loadingStatus = ref<TLodaidngStatus>('idle');
        const availableProcedures = ref<IProceduresResponce[]>([]);
        const availableMasters = ref<IMastersResponce[]>([]);

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

        return {
            loadingStatus,
            availableProcedures,
            availableMasters,
            setAvailableProcedures,
            setAvailableMasters,
        };
    },
);
