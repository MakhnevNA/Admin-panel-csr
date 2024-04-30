<template>
    <form class="caform">
        <div class="caform__title">Create new appointment</div>
        <label htmlFor="name"> Name<span>*</span> </label>
        <Input
            v-model:value="name"
            name="name"
            class="input__name"
            id="name"
            placeholder="User name"
        />

        <label htmlFor="service"> Service<span>*</span> </label>
        <Input
            v-model:value="service"
            name="service"
            class="input__service"
            id="service"
            placeholder="Service name"
        />

        <label htmlFor="phone"> Phone number<span>*</span> </label>
        <Input
            v-model:value="phone"
            type="tel"
            name="phone"
            class="input__phone"
            id="phone"
            placeholder="+1 890 335 372"
            pattern="^\++[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{3}"
            title="Format should be +1 804 944 567"
        />

        <label htmlFor="date"> Date<span>*</span> </label>
        <Input
            v-model:value="date"
            name="date"
            class="input__date"
            id="date"
            placeholder="DD/MM/YYYY HH:mm"
            pattern="^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$"
            title="Format should be DD/MM/YYYY HH:mm"
        />

        <button>Create</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from './UI/Input.vue';

const name = ref<string>();
const service = ref<string>();
const phone = ref<string>();
const date = ref<string>();
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.caform {
    width: 280px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
    &__title {
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        color: $black-text-70;
        text-align: center;
    }
    label {
        display: block;
        margin-top: 15px;
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
        color: $black-text-70;
        span {
            color: $cancel;
        }
    }
    button {
        width: 150px;
        height: 40px;
        display: block;
        margin: 20px auto 0 auto;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 24px;
        cursor: pointer;
        background-color: #fff;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        color: $black-text-70;
        transition: 0.3s all;
        &:hover {
            background-color: $inputs;
        }
        &:disabled {
            background-color: $disabled;
        }
    }
}
</style>
