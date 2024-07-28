<template>
    <div>
        <Input
            :id="props.id"
            v-model:value="value"
            class="input"
            :type="props.type"
            :class="[$attrs.class, { 'input--error': error }]"
            :name="props.name"
            :placeholder="props.placeholder"
            :autocomplete="props.autocomplete"
            @change="handleChange"
            @input="handleInput"
        />
        <template v-if="error">
            <div v-if="Array.isArray(error)" class="input__error">
                fdfdfdfdf
            </div>
            <div v-else class="input__error">
                {{ error }}
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
// import { IInputEvent } from '@/shared/types';
import { useField, useFormContext } from '@vorms/core';
import { Input } from 'ant-design-vue';
import { toRef } from 'vue';

type TInputProps = {
    type?: 'text' | 'password' | 'tel' | 'number';
    name: string;
    id?: string;
    placeholder?: string;
    autocomplete?: string;
};

const props = withDefaults(defineProps<TInputProps>(), {
    type: 'text',
    name: undefined,
    id: undefined,
    placeholder: undefined,
    autocomplete: 'off',
});

const name = toRef(props, 'name');

const emit = defineEmits(['update:value']);

// const updateInput = (e: Event) => {
//     const target = e.target as HTMLInputElement;
//     emit('update:value', target.value);
// };
const { value, error, attrs } = useField<string | undefined | number>(name);
const { setFieldValue, isValidating } = useFormContext();

const handleChange = (event: Event) => {
    attrs.value.onChange();
    const target = event.target as HTMLInputElement;

    setFieldValue(props.name, target.value, isValidating.value);
};

const handleInput = (event: Event) => {
    attrs.value.onInput();
    const target = event.target as HTMLInputElement;

    setFieldValue(props.name, target.value, isValidating.value);
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';
input.ant-input {
    width: 100%;
    height: 24px;
    background: $inputs;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 0 11px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: $black-text-50;
    border-radius: unset !important;
    box-shadow: unset;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.input--error {
    border: 1px solid red !important;
}

.input__error {
    margin: 5px 8px 0;
    color: red;
}
</style>
