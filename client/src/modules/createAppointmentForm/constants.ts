import * as Yup from 'yup';

const validator = Yup.string().required('Обязательное поле*');

export const newBookingFormShema = Yup.object().shape({
    firstName: validator,
    secondName: validator,
    service: validator,
    masterName: validator,
    phone: validator,
    date: validator,
    time: validator,
});
