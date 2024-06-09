import { useHttp } from '@/hooks/http.hook';
import {
    ICreateAppointmentForm,
    IMastersRequestBody,
    IMastersResponce,
    IProceduresRequestBody,
    IProceduresResponce,
} from '../types';

const { request } = useHttp();

export const addNewAppointment = async (
    data: ICreateAppointmentForm,
): Promise<boolean> => {
    try {
        return request<boolean>({
            url: '/',
            method: 'POST',
            body: JSON.stringify(data),
        });
    } catch (error) {
        throw error;
    }
};

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
