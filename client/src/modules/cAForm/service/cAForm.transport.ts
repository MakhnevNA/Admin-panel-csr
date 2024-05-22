import { useHttp } from '@/hooks/http.hook';
import { ICAForm } from '../types';

const { request } = useHttp();

export const addNewAppointment = async (data: ICAForm): Promise<boolean> => {
    try {
        return request<boolean>({
            url: 'api/',
            method: 'POST',
            body: JSON.stringify(data),
        });
    } catch (error) {
        throw error;
    }
};
