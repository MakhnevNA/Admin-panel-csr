import { useHttp } from '@/hooks/http.hook';
import { IHistoryListAllAppointments } from '../types';

const { request } = useHttp();

export const getAllAppoinments = async (): Promise<
    IHistoryListAllAppointments[]
> => {
    try {
        return request<IHistoryListAllAppointments[]>({
            url: 'history',
        });
    } catch (error) {
        throw error;
    }
};
