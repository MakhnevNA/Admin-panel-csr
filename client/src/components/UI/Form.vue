<template>
    <form class="form" @submit="handleSubmitForm" @reset="form.handleReset">
        <slot name="default" />
    </form>
</template>

<script setup lang="ts">
import { useForm } from '@vorms/core';
import { yupResolver } from '@vorms/resolvers/yup';
import * as yup from 'yup';
import { watch } from 'vue';
import type { TValuesForm } from '@/shared/types.ts';

type TValidateMode = 'blur' | 'input' | 'change' | 'submit';

type TFormProps = {
    initialValues: TValuesForm;
    onSubmit: (values: TValuesForm) => void;
    validationSchema?: yup.ObjectSchema<object>;
    onReset?: () => void;
    validateMode?: TValidateMode;
    onChange?: (values: TValuesForm) => void;
};

const props = withDefaults(defineProps<TFormProps>(), {
    onReset: undefined,
    validateMode: 'input',
    validationSchema: undefined,
    onChange: undefined,
});

const form = useForm({
    ...props,
    validate: props.validationSchema
        ? yupResolver(props.validationSchema)
        : undefined,
});

defineExpose({ form });

const handleSubmitForm = (event?: Event | undefined) => {
    form.handleSubmit(event);
};

watch(
    () => ({ ...form.values }),
    () => {
        props.onChange?.(form.values);
    },
);
</script>
