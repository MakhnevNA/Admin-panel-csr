<template>
    <button
        class="button"
        :type="props.type"
        :class="[props.variant, props.size]"
        :disabled="props.isDisabled"
        @click.stop="handleClick"
    >
        <div v-if="$slots.leftAccessory" class="button-content">
            <slot name="leftAccessory" />
        </div>

        <div class="button-content button-content--text">
            <slot />
        </div>
    </button>
</template>

<script setup lang="ts">
interface IButtonProps {
    type?: 'submit' | 'reset' | 'button';
    variant?: 'default' | 'secondary' | 'unstylized';
    size?: 'normal' | 'circle';
    isDisabled?: boolean;
}

const props = withDefaults(defineProps<IButtonProps>(), {
    type: 'button',
    variant: 'default',
    size: 'normal',
    isDisabled: false,
});

const emit = defineEmits(['handleClick']);
const handleClick = () => {
    emit('handleClick');
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.button {
    display: block;
    cursor: pointer;
    transition: background 0.3s;
    font-weight: 600;
    color: $black-text-70;

    &:disabled {
        cursor: not-allowed;
    }
}

.default {
    font-size: 12px;
    line-height: 16px;
    border: 1px solid $disabled;

    &:hover {
        background: $disabled;
    }

    &:disabled {
        background: $inputs;
    }
}

.secondary {
    background: $white-background;
    font-size: 12px;
    line-height: 16px;
    border: 1px solid $cancel;

    &:hover {
        background: $cancel-80;
    }
    &:disabled {
        background: $main-color;
        border: 1px solid $red-border;
        color: $white-background;
    }
}

.circle {
    border-radius: 24px;
    border: 1px solid $black-text-40;
    background-color: $white-background;
    font-size: 15px;
    line-height: 20px;

    &:hover {
        background: $disabled;
    }
    &:disabled {
        background: $inputs;
    }
}

.unstylized {
    background-color: transparent;
}
</style>
