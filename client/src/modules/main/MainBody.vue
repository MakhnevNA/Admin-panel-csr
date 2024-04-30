<template>
    <section class="schedule">
        <div class="schedule__controls">
            <Calendar />
            <CAForm />
        </div>
        <div class="schedule__list">
            <AppointmentList />
        </div>
    </section>
    <CancelModal
        :modal-id="MODAL_ID.CANCEL__MODAL"
        :closeModal="closeModal"
        :close-modal-on-escape-key="closeModalOnEscapeKey"
    />
</template>

<script setup lang="ts">
import AppointmentList from '@/components/AppointmentList.vue';
import CAForm from '@/components/CAForm.vue';
import Calendar from '@/components/Calendar.vue';
import CancelModal from '@/components/CancelModal.vue';
import { useModalService } from '@/components/UI/Modal/modal.service';
import { MODAL_ID } from '@/shared/modalId';

const { closeModal, closeModalOnEscapeKey } = useModalService();
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.schedule {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    &__controls {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    &__list {
        display: flex;
        flex-direction: column;
        gap: 20px;

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
