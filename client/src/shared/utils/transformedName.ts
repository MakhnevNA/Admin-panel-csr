import { ROUTER_LINK } from '../types';

export const transformedName = (fullName: string) => {
    const location = window.location.pathname;

    const name =
        location === ROUTER_LINK.HISTORY_PAGE
            ? `${fullName.split(' ')[0]} ${fullName.split(' ')[1][0]}.`
            : fullName;

    return name;
};
