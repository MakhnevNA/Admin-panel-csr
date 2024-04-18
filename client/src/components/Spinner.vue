<template>
    <template v-if="props.loadingStatus === 'loading'">
        <div style="width: 500px; text-align: center">
            <IconSpinner width="200" height="200" />
        </div>
    </template>
    <template v-else-if="props.loadingStatus === 'idle'">
        <slot />
    </template>
    <template v-else-if="props.loadingStatus === 'error'">
        <!-- <div>fdfdf</div> -->
    </template>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import IconSpinner from '@/assets/svg/IconSpinner.svg';
import { TLodaidngStatus } from '@/shared/types';

interface ISpinnerProps {
    loadingStatus: TLodaidngStatus;
}

const props = defineProps<ISpinnerProps>();
</script>

<style scoped lang="scss"></style>
