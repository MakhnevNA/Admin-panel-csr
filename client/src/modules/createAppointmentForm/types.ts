export interface ICreateAppointmentForm {
    firstName: string;
    secondName: string;
    service: string;
    masterName: string;
    masterId: string;
    phone: string;
    date: string;
    time: string;
    canceled: boolean;
}

export interface IProceduresResponce {
    _id: string;
    procedureId: string;
    name: string;
    value: string;
}

export interface IProceduresRequestBody {
    mastersProceduresId?: string[];
}

export interface IMastersResponce {
    _id: string;
    name: string;
    procedures: string[];
    value: string;
}

export interface IMastersRequestBody {
    procedureId?: string;
}