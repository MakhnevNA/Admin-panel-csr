<template>
    <Tooltip :title="props.tooltipTitle">
        <Select
            :id="props.id"
            ref="selectRef"
            v-model:value="value"
            class="select"
            :class="props.className"
            :loading="props.loading"
            :disabled="props.disabled"
            :placeholder="props.placeholder"
            :name="props.name"
            @select="handleSelect"
            @focus="props.onFocus"
        >
            <SelectOption
                selected
                :value="undefined"
                class="select_without-value"
            >
                {{ props.placeholder }}
            </SelectOption>
            <template v-for="option in props.optionValue" :key="option._id">
                <SelectOption :value="option.value">
                    {{ option.name }}
                </SelectOption>
            </template>
        </Select>
    </Tooltip>
</template>

<script setup lang="ts">
import { Select, SelectOption, Tooltip } from 'ant-design-vue';
import { RawValueType } from 'ant-design-vue/es/vc-select/BaseSelect';
import { LabelInValueType } from 'ant-design-vue/es/vc-select/Select';
import { ref } from 'vue';

const value = ref<string>();

interface ISelectProps {
    className: string;
    // eslint-disable-next-line
    optionValue: any;
    name: string;
    id: string;
    loading: boolean;
    disabled?: boolean;
    placeholder: string;
    required?: boolean;
    tooltipTitle?: string;
    onFocus: () => void;
}

const props = withDefaults(defineProps<ISelectProps>(), {
    tooltipTitle: undefined,
    required: true,
});

const selectRef = ref<HTMLSelectElement>();

defineExpose({ select: selectRef });

const emit = defineEmits(['update:value']);

const handleSelect = (e: RawValueType | LabelInValueType) => {
    emit('update:value', e);
};
</script>

<style lang="scss">
@import '@/style/variables.scss';
.select {
    width: 100%;

    .ant-select-focused {
        border-color: red !important;
    }

    .ant-select-selector {
        background: $inputs !important;
        height: 24px !important;
        border-radius: unset;
        box-shadow: unset !important;
        border: 1px solid rgba(0, 0, 0, 0.15) !important;

        .ant-select-selection-item {
            color: $black-text-50;
            display: flex;
            align-items: center;
            font-weight: 600;
            font-size: 12px;
        }

        .ant-select-selection-overflow {
            height: 24px !important;
            display: flex;
            align-items: center;
        }

        .ant-select-selection-placeholder {
            color: $black-text-50;
            font-weight: 600;
            font-size: 12px;
            display: flex;
            align-items: center;
        }
    }
}

.ant-select-item-option-disabled {
    &:not(:first-child) {
        .ant-select-item-option-content {
            display: none;
            text-decoration: line-through;
        }
    }
}

.ant-select-dropdown {
    background: $inputs !important;
    border-radius: unset;
    border: 1px solid rgba(0, 0, 0, 0.15);
}

.ant-select-item-option {
    padding: 5px 12px !important;
    gap: 0;
    min-height: unset !important;
    &-content {
        // font-weight: 600;
        font-size: 12px;
    }
}

.ant-select-focused {
    border-color: red !important;
}

.select_without-value {
    color: grey !important;
}
</style>
