import { useHttp } from '@/hooks/http.hook';
import { ISheduleListActiveAppointments } from '../types';

const { request } = useHttp();

export const getActiveAppoinments = async (): Promise<
    ISheduleListActiveAppointments[]
> => {
    try {
        return request({
            url: '/',
        });
    } catch (error) {
        throw error;
    }
};
