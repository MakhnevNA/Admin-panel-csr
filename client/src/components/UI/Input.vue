<template>
    <Input
        v-model:value="value"
        :type="props.type"
        :class="props.className"
        :name="props.name"
        :id="props.id"
        :placeholder="props.placeholder"
        class="input"
        :autocomplete="props.autocomplete"
        @input="updateInput"
    />
</template>

<script setup lang="ts">
import { Input } from 'ant-design-vue';
import { ref } from 'vue';

const value = ref<string | undefined>(undefined);

type TInputProps = {
    type?: 'text' | 'password' | 'tel';
    className?: string;
    name?: string;
    id?: string;
    placeholder?: string;
    autocomplete?: string;
};

const props = withDefaults(defineProps<TInputProps>(), {
    type: 'text',
    className: undefined,
    name: undefined,
    id: undefined,
    placeholder: undefined,
    autocomplete: 'off',
});

const emit = defineEmits(['update:value']);

const updateInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    emit('update:value', target.value);
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
    border-radius: unset;
    box-shadow: unset;
}
</style>
