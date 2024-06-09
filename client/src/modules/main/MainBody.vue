<template>
    <div class="main-body">
        <section class="main-body__filter">
            <Calendar />
        </section>
        <section class="main-body__content">
            <CreateAppointmentForm />
            <MainList />
        </section>
    </div>
    <CancelModal
        :modal-id="MODAL_ID.CANCEL__MODAL"
        @closeModal="closeModal"
        @closeModalOnEscapeKey="closeModalOnEscapeKey"
    />
</template>

<script setup lang="ts">
import MainList from '@/components/MainList.vue';
import CreateAppointmentForm from '../createAppointmentForm/CreateAppointmentForm.vue';
import Calendar from '@/modules/calendar/Calendar.vue';
import CancelModal from '@/components/CancelModal.vue';
import { useModalService } from '@/components/UI/Modal/modal.service';
import { MODAL_ID } from '@/shared/modalId';

const { closeModal, closeModalOnEscapeKey } = useModalService();
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.main-body {
    padding-top: 30px;

    &__filter {
        margin-bottom: 40px;
        display: flex;
        gap: 10px;
    }

    &__content {
        display: flex;
        justify-content: space-between;

        :deep(.appointment) {
            width: 550px;
        }
    }

    // &__reload {
    //     padding: 10px 20px;
    //     width: 150px;
    //     height: 40px;
    //     margin: 30px auto 0 auto;
    //     background: $inputs;
    //     border: 1px solid rgba(0, 0, 0, 0.4);
    //     border-radius: 24px;
    //     font-weight: 600;
    //     font-size: 15px;
    //     line-height: 20px;
    //     color: #000000;
    //     cursor: pointer;
    //     &:disabled {
    //         background: $disabled;
    //     }
    // }
}
</style>
