<template>
    <div class="calendar">
        <RangePicker v-model:value="chosenDate" :format="dateFormat" />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { RangePicker } from 'ant-design-vue';
import { dateFormat } from './constants';
import { useCalendarService } from './service/calendar.service';
import { TChosenDate } from './types';

const chosenDate = ref<TChosenDate>();
const { setTransformedChosenDate } = useCalendarService();

watch(chosenDate, () => {
    if (chosenDate.value) {
        setTransformedChosenDate(chosenDate.value);
    }
});
</script>

<style lang="scss">
@import '@/style/variables.scss';

// TODO: При наведении убрать синий бордер
// TODO: При выборе промежутка дат синие точки заменить на вот этот персиковый цвет

.ant-picker {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
}

.ant-picker.ant-picker-range,
.ant-picker-panel-container {
    border-radius: unset !important;
}

.ant-picker-cell {
    transition: background 0.3s;

    &:hover {
        background: $range-date;
    }

    .ant-picker-cell-inner {
        background: none !important;
    }
}

.ant-picker-cell-today {
    background: $active-date !important;
    .ant-picker-cell-inner {
        border-radius: unset !important;

        &:before {
            border: none !important;
        }
    }
}

.ant-picker-cell.ant-picker-cell-in-range,
.ant-picker-cell.ant-picker-cell-range-start,
.ant-picker-cell.ant-picker-cell-range-end {
    background: $range-date !important;

    &::before {
        background: $range-date !important;
    }

    .ant-picker-cell-inner {
        color: rgba(0, 0, 0, 0.88) !important;
        &::after {
            background: none !important;
        }
    }
}

.ant-picker-dropdown.ant-picker-cell-in-view.ant-picker-range-hover:not(
        .ant-picker-cell-in-range
    ) {
    &:after {
        border-top: 1px solid red;
    }
}
.ant-picker-range-separator {
    display: none;
}
</style>

<style scoped lang="scss"></style>
