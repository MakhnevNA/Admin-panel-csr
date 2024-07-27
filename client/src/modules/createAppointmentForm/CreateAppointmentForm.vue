<template>
    <Form
        class="create-appointment-form"
        :initial-values="{
            service: 'dffd',
            masterName: 'fdffd',
            date: 'fdfdf',
            time: 'fdf',
        }"
        :validation-schema="newBookingFormShema"
        :on-submit="handleSubmit"
    >
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
            type="number"
            name="phone"
            class="input__phone"
            id="phone"
            placeholder="+7 999 999 99 99"
        />

        <label htmlFor="service"> Service <span>*</span> </label>
        <Select
            className="select__service"
            v-model:value="service"
            :key="serviceKey"
            name="service"
            id="service"
            placeholder="Select a service"
            :option-value="availableProcedures"
            :loading="loadingStatus !== 'idle'"
            @focus="handleGetProcedures"
        />

        <label htmlFor="service"> Master name<span>*</span> </label>
        <Select
            className="input__masterName"
            v-model:value="masterName"
            :key="masterNameKey"
            name="masterName"
            id="masterName"
            placeholder="Master name"
            :option-value="availableMasters"
            :loading="loadingStatus !== 'idle'"
            @focus="handleGetMasters"
        />

        <label htmlFor="date"> Date<span>*</span> </label>
        <Select
            name="date"
            v-model:value="date"
            :key="dateKey"
            className="input__date"
            id="date"
            placeholder="DD/MM/YYYY"
            :loading="false"
            :on-focus="handleGetDates"
            :option-value="availableDates"
        />

        <label htmlFor="date"> Time<span>*</span> </label>
        <Select
            name="time"
            v-model:value="time"
            className="input__time"
            id="time"
            placeholder="HH:mm"
            :disabled="!masterName || !service"
            :option-value="availableTimes[0]?.workingTime"
            :loading="loadingStatus !== 'idle'"
            :on-focus="handleGetTimes"
        />

        <Button type="submit" class="create-appointment-form__btn">
            Create
        </Button>
    </Form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import Input from '@/components/UI/Input.vue';
import Select from '@/components/UI/Select.vue';
import Button from '@/components/UI/Button.vue';
import { useCreateAppointmentFormService } from './service/createAppointmentForm.service';
import Form from '@/components/UI/Form.vue';
import { newBookingFormShema } from '@/modules/createAppointmentForm/constants.ts';
import { TValuesForm } from '@/shared/types';

const firstName = ref<string>();
const secondName = ref<string>();
const service = ref<string>();
const masterName = ref<string>();
const phone = ref<string>();
const date = ref<string>();
const time = ref<string>();

const masterNameKey = ref<any>();
const serviceKey = ref<any>();
const dateKey = ref<string>();

const formRef = ref<InstanceType<typeof Form>>();

const {
    requestCreateAppointmentFormServiceData,
    setAvailableProcedures,
    setAvailableMasters,
    setAvailableTimes,
    setAvailableDates,
} = useCreateAppointmentFormService();

const {
    loadingStatus,
    availableProcedures,
    availableMasters,
    availableTimes,
    availableDates,
} = storeToRefs(useCreateAppointmentFormService());

const handleGetProcedures = async () => {
    const mastersProceduresId = availableMasters.value.find(
        (item) => item.value === masterName.value,
    )?.procedures;

    // тут без проверок, потому что есть случаи, когда может быть undefined,
    // например, когда это поле выбирается первым и доступные мастера еще неизвестны
    await setAvailableProcedures({ mastersProceduresId });
};

const handleGetMasters = async () => {
    const procedureId = availableProcedures.value.find(
        (item) => item.value === service.value,
    )?.procedureId;

    // тут без проверок, потому что есть случаи, когда может быть undefined,
    // например, когда это поле выбирается первым и доступные услуги еще неизвестны
    await setAvailableMasters({ procedureId });
};

const handleGetTimes = async () => {
    const procedure = service.value;
    if (procedure) {
        await setAvailableTimes({ procedure });
    }
};

const handleGetDates = async () => {
    await setAvailableDates();
};

// с форматом данных для даты решить
const handleSubmit = (values: TValuesForm) => {
    // const masterId = availableMasters.value.find(
    //     (item) => item.name === masterName.value,
    // )?._id;

    console.log({
        // clientName: `${secondName.value} ${firstName.value}`,
        // service: service.value!,
        // masterName: masterName.value!,
        // // masterId: masterId,
        // phone: phone.value!,
        // date: `${date.value}T${time.value?.split(' ')[0]}`,
        // canceled: false,
        values,
    });

    // const validateForm =
    //     !!firstName.value &&
    //     !!secondName.value &&
    //     !!service.value &&
    //     !!masterName.value &&
    //     !!phone.value &&
    //     !!date.value &&
    //     !!time.value &&
    //     masterId;

    // if (validateForm) {
    //     const res = await requestCreateAppointmentFormServiceData({
    //         clientName: `${secondName.value} ${firstName.value}`,
    //         service: service.value!,
    //         masterName: masterName.value!,
    //         masterId: masterId,
    //         phone: phone.value!,
    //         date: `${date.value}T${time.value!.split(' ')[0]}`,
    //         canceled: false,
    //     });
    // }

    // if (res) {
    // 	handleResetForm()
    // }
};

watch(time, (newVal, oldaVal) => {
    if (oldaVal !== undefined) {
        masterNameKey.value = newVal;
        masterName.value = undefined;
        serviceKey.value = newVal;
        service.value = undefined;
        firstName.value = undefined;
        dateKey.value = newVal;
        date.value = undefined;
    }
});
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.create-appointment-form {
    width: 280px;
    max-height: 580px;
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
        // width: 150px;
        // height: 40px;
        // display: block;
        margin: 20px auto 0 auto;
        // border: 1px solid rgba(0, 0, 0, 0.4);
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
