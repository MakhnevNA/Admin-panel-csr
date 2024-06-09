import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { IModals } from './constanst';

export const useModalService = defineStore('modalService', () => {
    const modals = ref<IModals[]>([]);

    const openModal = (modalId: string) => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.scrollbarGutter = 'stable';

        if (!modals.value.some((item) => item.id === modalId)) {
            modals.value.push({ id: modalId, isOpen: true });
        }
    };

    const closeModal = (modalId: string) => {
        document.body.style.overflow = 'auto';
        document.documentElement.style.scrollbarGutter = 'unset';
        const index = modals.value.findIndex((modal) => modal.id === modalId);

        if (index !== -1) {
            modals.value.splice(index, 1);
        }
    };

    const closeModalOnEscapeKey = (e: KeyboardEvent, modalId: string) => {
        if (e.key === 'Escape') {
            closeModal(modalId);
        }
    };

    const isModalOpen = (modalId: string) =>
        computed(() =>
            modals.value.some((modal) => modal.id === modalId && modal.isOpen),
        );

    return {
        openModal,
        closeModal,
        closeModalOnEscapeKey,
        isModalOpen,
    };
});
