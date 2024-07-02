export const generateDateTimes = (date) => {
    const dataDate = [];

    const dateStr = date.toISOString().split('T')[0];
    dataDate.push({ name: dateStr, value: dateStr });
    return dataDate;
};
