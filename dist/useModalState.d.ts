/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-21 10:41
 */
declare const useModalState: () => {
    visible: boolean;
    closeModal: () => void;
    openModal: () => void;
    toggle: () => void;
};
export default useModalState;
