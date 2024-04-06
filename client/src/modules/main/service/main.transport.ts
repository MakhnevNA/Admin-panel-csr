import { useHttp } from '@/hooks/http.hook';
import { ISheduleListAppointments } from '../types';

const { request } = useHttp();

export const getAllAppoinments = async (): Promise<
    ISheduleListAppointments[]
> => {
    try {
        return request<ISheduleListAppointments[]>({
            url: 'api/',
        });
    } catch (error) {
        throw error;
    }
};
