export enum ROUTER_LINK {
    MAIN_PAGE = '/',
    HISTORY_PAGE = '/history',
    NOT_FOUND_PAGE = '/not-found',
}

export type TLodaidngStatus = 'idle' | 'loading' | 'error';

export interface IInputEvent extends InputEvent {
    target: HTMLInputElement;
}

export type TValueFilter =
    | number
    | string
    | { from: number; to: number }
    | { from: string; to: string }
    | Array<string>
    | undefined
    | null;

export type TValuesForm = Record<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    string | number | Array<string> | undefined | null | TValueFilter | any
>;
