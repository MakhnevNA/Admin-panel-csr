import { ISheduleListActiveAppointments } from '../main/types';

export interface IHistoryListAllAppointments
    extends ISheduleListActiveAppointments {
    canceled: boolean;
}
