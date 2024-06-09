import { useHttp } from '@/hooks/http.hook';
import { ICreateAppointmentForm } from '../types';

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
