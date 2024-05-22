import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TChosenDate, TTransformedChosenDate } from '../types';
import dayjs from 'dayjs';

export const useCalendarService = defineStore('calendarService', () => {
    const transformedChosenDate = ref<TTransformedChosenDate>();

    const setTransformedChosenDate = (value: TChosenDate) => {
        const start = dayjs(value[0]).startOf('day');
        const end = dayjs(value[1]).endOf('day');

        transformedChosenDate.value = [start.toDate(), end.toDate()];
    };

    return {
        transformedChosenDate,
        setTransformedChosenDate,
    };
});
