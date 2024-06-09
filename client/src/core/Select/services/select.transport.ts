import { useHttp } from '@/hooks/http.hook';
import {
    IMastersRequestBody,
    IMastersResponce,
    IProceduresRequestBody,
    IProceduresResponce,
} from '../types';

const { request } = useHttp();

export const getAvailableProcedures = (
    data: IProceduresRequestBody,
): Promise<IProceduresResponce[]> => {
    try {
        return request({
            url: '/procedures',
            method: 'POST',
            body: JSON.stringify(data),
        });
    } catch (error) {
        throw error;
    }
};

export const getAvailableMasters = (
    data: IMastersRequestBody,
): Promise<IMastersResponce[]> => {
    try {
        return request({
            url: '/masters',
            method: 'POST',
            body: JSON.stringify(data),
        });
    } catch (error) {
        throw error;
    }
};
