export interface ICreateAppointmentForm {
    clientName: string;
    service: string;
    masterName: string;
    masterId: string;
    phone: string;
    date: string;
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

export interface ITimesRequestBody {
    procedure: string;
}

export interface IWorkingTime {
    _id: string;
    name: string;
    value: string;
}
export interface ITimesResponce {
    _id: string;
    procedure: string;
    workingTime: IWorkingTime[];
}

export interface IDateResponce {
    _id: string;
    value: string;
    name: string;
}
