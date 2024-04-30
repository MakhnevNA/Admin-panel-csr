<template>
    <teleport to="body">
        <div
            v-if="isOpen"
            :modal-id="props.modalId"
            class="modal"
            :class="props.className"
        >
            <div class="modal__container">
                <div class="modal__header">
                    <div class="modal__header-title">
                        <slot name="header" />
                        <button @click.stop="closeModal">
                            <IconClose width="22" height="22" />
                        </button>
                    </div>
                </div>
                <div class="modal__body">
                    <slot name="body" />
                </div>
            </div>
            <div class="modal__overlay" @click.stop="closeModal"></div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import IconClose from '@/assets/svg/IconClose.svg';
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';
import { useModalService } from './modal.service';
import { MODAL_ID } from '@/shared/modalId';

const { isModalOpen } = useModalService();

const isOpen = ref(isModalOpen(MODAL_ID.CANCEL__MODAL));

export type TModalProps = {
    className?: string;
    modalId: string;
};

const props = withDefaults(defineProps<TModalProps>(), {
    className: undefined,
    modalId: undefined,
});

const emit = defineEmits(['closeModalOnEscapeKey', 'closeModal']);

const closeModal = () => {
    emit('closeModal', props.modalId);
};

const closeOnEscapeKey = (e: KeyboardEvent) => {
    emit('closeModalOnEscapeKey', e, props.modalId);
};

onMounted(() => {
    document.body.addEventListener('keydown', (e) => closeOnEscapeKey(e));
});
onUnmounted(() => {
    document.body.removeEventListener('keydown', closeOnEscapeKey);
});
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';
.modal {
    position: absolute;
    z-index: 1500;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 243, 223, 0.8);

    &__container {
        position: relative;
        z-index: 2;
        width: 450px;
        min-height: 160px;
        background-color: #fff;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
        padding: 20px 25px 16px 25px;
    }
    &__header {
        margin-bottom: 20px;
        &-title {
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                font-weight: 600;
                font-size: 14px;
                line-height: 19px;
            }
        }
    }

    &__overlay {
        position: fixed;
        z-index: 0;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
