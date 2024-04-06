<template>
    <header class="header">
        <RouterLink :to="ROUTER_LINK.MAIN_PAGE" class="header__logo">
            Beauty
            <br />
            Admin
        </RouterLink>
        <nav>
            <ul class="header__list">
                <RouterLink
                    :to="ROUTER_LINK.MAIN_PAGE"
                    class="header__link header__link--active"
                >
                    <a href="/">Schedule</a>
                </RouterLink>
                <RouterLink :to="ROUTER_LINK.HISTORY_PAGE" class="header__link">
                    <a href="/">History</a>
                </RouterLink>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { ROUTER_LINK } from '@/shared/types';
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.header {
    &__logo {
        position: absolute;
        top: 10px;
        left: 35px;
        font-weight: 700;
        font-size: 22px;
        line-height: 30px;
        color: $main-color;
        &:hover {
            color: $main-color;
        }
    }

    &__list {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 60px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }
    &__link {
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        color: rgba(0, 0, 0, 0.5);
        &--active {
            color: $main-color;
        }
        a {
            display: block;
            width: 100%;
            padding: 0 20px;
            &:hover {
                color: $main-color;
            }
        }
    }
}
</style>
