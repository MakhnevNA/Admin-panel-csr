<template>
    <Wrapper>
        <ErrorMessage />
        <RouterLink :to="ROUTER_LINK.MAIN_PAGE" class="error__link">
            Вернуться на главную
        </RouterLink>
    </Wrapper>
</template>

<script setup lang="ts">
import Wrapper from '@/components/layouts/Wrapper.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';
import { ROUTER_LINK } from '@/shared/types';
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.error {
    &__link {
        display: block;
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        color: rgba(0, 0, 0, 0.5);
        text-align: center;
        margin-top: 20px;
        &:hover {
            color: $main-color;
        }
    }
}
</style>
