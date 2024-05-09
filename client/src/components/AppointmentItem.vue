<template>
    <div class="appointment">
        <div class="appointment__info">
            <span class="appointment__date"
                >Date: {{ formattedDate(props.appointment.date) }}</span
            >
            <span class="appointment__name"
                >Name: {{ props.appointment.name }}</span
            >
            <span class="appointment__service"
                >Service: {{ props.appointment.service }}</span
            >
            <span class="appointment__phone"
                >Phone: {{ props.appointment.phone }}</span
            >
        </div>
        <div
            v-if="location === ROUTER_LINK.MAIN_PAGE"
            class="appointment__widget"
        >
            <div class="appointment__time">
                <span>Time left:</span>
                <span class="appointment__timer">{{ timeLeft }}</span>
            </div>
            <Button
                variant="secondary"
                class="appointment__cancel"
                @click="openModal(MODAL_ID.CANCEL__MODAL)"
            >
                Cancel
            </Button>
        </div>
        <div
            v-else-if="
                location === ROUTER_LINK.HISTORY_PAGE &&
                'canceled' in appointment &&
                appointment.canceled
            "
            class="appointment__canceled"
        >
            Canceled
        </div>
    </div>
</template>

<script setup lang="ts">
import { IHistoryListAllAppointments } from '@/modules/history/types';
import { ISheduleListActiveAppointments } from '@/modules/main/types';
import { ROUTER_LINK } from '@/shared/types';
import { onMounted, onUnmounted, ref } from 'vue';
import { formattedDate } from '@/shared/utils/formattedDate.ts';
import dayjs from 'dayjs';
import { useModalService } from './UI/Modal/modal.service';
import { MODAL_ID } from '@/shared/modalId';
import Button from './UI/Button.vue';

const location = window.location.pathname;
const timeLeft = ref<string | null>(null);

const { openModal } = useModalService();

interface IAppointmentItemProps {
    appointment: ISheduleListActiveAppointments | IHistoryListAllAppointments;
}

const props = defineProps<IAppointmentItemProps>();

let timerId: NodeJS.Timeout;

onMounted(() => {
    let days;
    let hours;
    let minutes;

    const updateValues = () => {
        days = dayjs(props.appointment.date).diff(undefined, 'd');
        hours = dayjs(props.appointment.date).diff(undefined, 'h') % 60;
        minutes = dayjs(props.appointment.date).diff(undefined, 'm') % 60;

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');

        timeLeft.value = `${days}:${hours}:${minutes}`;
    };

    if (location === ROUTER_LINK.MAIN_PAGE) {
        updateValues();
        timerId = setInterval(updateValues, 60000);
    }
});

onUnmounted(() => {
    clearInterval(timerId);
});
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.appointment {
    position: relative;
    padding: 15px;
    background-color: #fff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;

    &__timer {
        display: block;
        font-size: 24px;
        line-height: 33px;
        margin: 15px 50px 0 0;
        color: $black-text-70;
    }
    span:not(.appointment__timer) {
        display: block;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        color: $black-text-70;
    }
    span:not(:first-child, .appointment__timer) {
        margin-top: 10px;
    }

    &__widget {
        justify-self: center;
    }

    &__canceled {
        position: absolute;
        left: 15px;
        bottom: 15px;
        width: 75px;
        height: 20px;
        background: #ffffff;
        border: 1px solid $cancel;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        padding: 2px 0;
        color: $black-text-70;
    }

    &__cancel {
        position: absolute;
        width: 75px;
        height: 20px;
        right: 15px;
        bottom: 15px;
        padding: 2px 0;
    }
}
</style>
