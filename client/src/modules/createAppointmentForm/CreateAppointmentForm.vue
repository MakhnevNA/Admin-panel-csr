<template>
    <form class="create-appointment-form" @submit.prevent="handleSubmitForm">
        <div class="create-appointment-form__title">Create new appointment</div>
        <label htmlFor="service"> First name<span>*</span> </label>
        <Input
            v-model:value="firstName"
            name="firstName"
            class="input__firstName"
            id="firstName"
            placeholder="First name"
        />

        <label htmlFor="service"> Second name<span>*</span> </label>
        <Input
            v-model:value="secondName"
            name="secondName"
            class="input__secondName"
            id="secondName"
            placeholder="Second name"
        />

        <label htmlFor="phone"> Phone number<span>*</span> </label>
        <Input
            v-model:value="phone"
            type="tel"
            name="phone"
            class="input__phone"
            id="phone"
            placeholder="+7 999 999 99 99"
        />

        <label htmlFor="service"> Service <span>*</span> </label>
        <Select
            v-model:value="service"
            className="select__service"
            name="service"
            id="service"
            placeholder="Select a service"
            :option-value="availableProcedures"
            :loading="loadingStatus !== 'idle'"
            @focus="handleGetProcedures"
        />

        <label htmlFor="service"> Master name<span>*</span> </label>
        <Select
            v-model:value="masterName"
            className="input__masterName"
            name="masterName"
            id="masterName"
            placeholder="Master name"
            :option-value="availableMasters"
            :loading="loadingStatus !== 'idle'"
            @focus="handleGetMasters"
        />

        <!-- <label htmlFor="date"> Date<span>*</span> </label>
        <Select
            v-model:value="date"
            name="date"
            class="input__date"
            id="date"
            placeholder="DD/MM/YYYY"
            pattern="^\d{2}\/\d{2}\/\d{4}"
            title="Format should be DD/MM/YYYY"
            :disabled="!masterName"
        >
            <option v-for="item in serviceValue" :disabled="!item.available">
                {{ item.label }}
            </option>
        </Select>

        <label htmlFor="date"> Time<span>*</span> </label>
        <Select
            v-model:value="time"
            name="time"
            class="input__time"
            id="time"
            placeholder="HH:mm"
            pattern="^\d{2}:\d{2}$"
            title="Format should be HH:mm"
            :disabled="!date"
        >
            <option v-for="item in serviceValue" :disabled="!item.available">
                {{ item.label }}
            </option>
        </Select> -->

        <Button type="submit" class="create-appointment-form__btn">
            Create
        </Button>
    </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import Input from '@/components/UI/Input.vue';
import Select from '@/components/UI/Select.vue';
import Button from '@/components/UI/Button.vue';
import { useCreateAppointmentFormService } from './service/createAppointmentForm.service';
const firstName = ref('');
const secondName = ref('');
const service = ref<string>();
const masterName = ref<string>();
const phone = ref('');
const date = ref('');
const time = ref('');

const {
    requestCreateAppointmentFormServiceData,
    setAvailableProcedures,
    setAvailableMasters,
} = useCreateAppointmentFormService();

const { loadingStatus, availableProcedures, availableMasters } = storeToRefs(
    useCreateAppointmentFormService(),
);

const handleGetProcedures = async () => {
    const mastersProceduresId = availableMasters.value.find(
        (item) => item.value === masterName.value,
    )?.procedures;

    // тут без проверок, потому что если случаи, когда может быть undefined,
    // например, когда это поле выбирается первым и доступные мастера еще неизвестны
    await setAvailableProcedures({
        mastersProceduresId: mastersProceduresId,
    });
};

const handleGetMasters = async () => {
    const procedureId = availableProcedures.value.find(
        (item) => item.value === service.value,
    )?.procedureId;

    // тут без проверок, потому что если случаи, когда может быть undefined,
    // например, когда это поле выбирается первым и доступные услуги еще неизвестны
    await setAvailableMasters({ procedureId: procedureId });
};

// с форматом данных для даты решить
// тогда вроде все хорошо должно работать
const handleSubmitForm = async () => {
    console.log({
        firstName: firstName.value,
        secondName: secondName.value,
        service: service.value,
        masterName: masterName.value,
        phone: phone.value,
        // date: date.value,
        // time: time.value,
        canceled: false,
    });

    // await requestCreateAppointmentFormServiceData({
    //     name: name.value,
    //     service: service.value,
    //     phone: phone.value,
    //     date: new Date(date.value).toISOString(),
    //     canceled: false,
    // });
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.create-appointment-form {
    width: 280px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
    &__title {
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        color: $black-text-70;
        text-align: center;
    }
    label {
        display: block;
        margin-top: 15px;
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
        color: $black-text-70;
        span {
            color: $cancel;
        }
    }
    button {
        width: 150px;
        height: 40px;
        display: block;
        margin: 20px auto 0 auto;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 24px;
        cursor: pointer;
        background-color: #fff;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        color: $black-text-70;
        transition: 0.3s all;
        &:hover {
            background-color: $inputs;
        }
        &:disabled {
            background-color: $disabled;
        }
    }

    .input,
    .select {
        margin-top: 5px;
    }

    .create-appointment-form__btn {
        width: 150px;
        height: 40px;
    }
}
</style>
