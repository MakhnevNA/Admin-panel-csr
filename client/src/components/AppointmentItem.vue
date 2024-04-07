<template>
    <div class="appointment">
        <div class="appointment__info">
            <span class="appointment__date"
                >Date: {{ props.appointment.date }}</span
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
            class="appointment__time"
            v-if="activeTabUrl === ROUTER_LINK.MAIN_PAGE"
        >
            <span>Time left:</span>
            <span class="appointment__timer">DD:HH:mm</span>
        </div>
        <button
            v-if="activeTabUrl === ROUTER_LINK.MAIN_PAGE"
            class="appointment__cancel"
        >
            Cancel
        </button>

        <div
            v-else-if="
                activeTabUrl === ROUTER_LINK.HISTORY_PAGE &&
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
import { ref } from 'vue';

const activeTabUrl = ref(window.location.pathname);

interface IAppointmentItem {
    appointment: ISheduleListActiveAppointments | IHistoryListAllAppointments;
}

const props = defineProps<IAppointmentItem>();
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.appointment {
    position: relative;
    padding: 15px;
    background-color: #fff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
    display: grid;
    grid-template-columns: 240px auto;
    column-gap: 110px;
    &__timer {
        display: block;
        font-size: 24px;
        line-height: 33px;
        margin-top: 15px;
        color: rgba(0, 0, 0, 0.7);
    }
    span:not(.appointment__timer) {
        display: block;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.7);
    }
    span:not(:first-child, .appointment__timer) {
        margin-top: 10px;
    }
    &__cancel {
        position: absolute;
        width: 75px;
        height: 20px;
        right: 15px;
        bottom: 15px;
        padding: 2px 0;
        background: #ffffff;
        border: 1px solid $cancel;
        cursor: pointer;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: rgba(0, 0, 0, 0.7);
        transition: 0.3s all;
        &:hover {
            color: #fff;
            background-color: $cancel;
        }
        &:disabled {
            color: #fff;
            background-color: $inputs;
            border: none;
        }
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
        color: rgba(0, 0, 0, 0.7);
    }
}
</style>
@/modules/history/types
