<template>
    <Modal
        class-name="cancel__modal"
        :modal-id="props.modalId"
        @closeModal="handleClose"
        @closeModalOnEscapeKey="handleCloseOnEscapeKey"
    >
        <template #header>
            Are you sure you want to delete the appointment?
        </template>
        <template #body>
            <div class="modal__btns">
                <Button class="modal__yes modal__button">Yes</Button>
                <Button
                    variant="secondary"
                    class="modal__close modal__button"
                    @click="handleClose"
                >
                    Close
                </Button>
            </div>
            <div class="modal__status">Success</div>
        </template>
    </Modal>
</template>

<script setup lang="ts">
import Button from './UI/Button.vue';
import Modal from './UI/Modal/Modal.vue';

type TCancelModalProps = {
    modalId: string;
};

const props = defineProps<TCancelModalProps>();

const emit = defineEmits(['closeModalOnEscapeKey', 'closeModal']);

const handleClose = () => {
    emit('closeModal', props.modalId);
};

const handleCloseOnEscapeKey = (e: KeyboardEvent) => {
    emit('closeModalOnEscapeKey', e, props.modalId);
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';
.modal {
    &__title {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
    }
    &__btns {
        margin-top: 40px;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
    }
    &__button {
        width: 100px;
        height: 25px;
        padding: 4px 0;
    }

    &__status {
        margin-top: 15px;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
        text-align: center;
    }
}
</style>
