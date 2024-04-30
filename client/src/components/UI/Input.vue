<template>
    <input
        :value="props.value"
        :type="props.type"
        class="input"
        :class-name="props.className"
        :name="props.name"
        :id="props.id"
        :placeholder="props.placeholder"
        :required="props.required"
        @input="updateInput"
    />
</template>

<script setup lang="ts">
type TInputProps = {
    value?: string | number;
    type?: 'text' | 'password' | 'tel';
    className?: string;
    name?: string;
    id?: string;
    placeholder?: string;
    required?: boolean;
    title?: string;
    pattern?: string;
};

const props = withDefaults(defineProps<TInputProps>(), {
    type: 'text',
    className: undefined,
    name: undefined,
    id: undefined,
    placeholder: undefined,
    required: true,
    title: undefined,
    pattern: undefined,
});

const emit = defineEmits(['update:value']);

const updateInput = (e) => {
    emit('update:value', e.target.value);
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';
input {
    width: 100%;
    margin-top: 5px;
    height: 24px;
    background: $inputs;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 10px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: $black-text-50;
}
</style>
