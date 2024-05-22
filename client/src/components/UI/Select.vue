<template>
    <Select
        v-model:value="value"
        class="select"
        :class="props.className"
        :placeholder="props.placeholder"
        :name="props.name"
        :id="props.id"
        @select="(e: any) => updateSelect(e)"
    >
        <template v-for="option in props.optionValue" :key="option.label">
            <Select-option v-if="option.available" :value="option.value">
                {{ option.label }}
            </Select-option>
        </template>
    </Select>
</template>

<script setup lang="ts">
import { Select, SelectOption } from 'ant-design-vue';
import { ref } from 'vue';

const value = ref<string | undefined>(undefined);

interface ISelectProps {
    value?: string;
    className?: string;
    optionValue?: any;
    name?: string;
    id?: string;
    placeholder?: string;
    required?: boolean;
}

const props = withDefaults(defineProps<ISelectProps>(), {
    className: undefined,
    name: undefined,
    id: undefined,
    required: true,
});

const emit = defineEmits(['update:value']);

const updateSelect = (e: Event) => {
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
</style>
