/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-21 10:41
 */
declare function useClipboard(): {
    copied: boolean;
    copyToClipboard: (text: string | number) => void;
};
export default useClipboard;
