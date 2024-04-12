import dayjs from 'dayjs';

export const formattedDate = (date: string) => {
    return dayjs(date).format('DD/MM/YYYY HH:mm');
};
