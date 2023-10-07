import { create } from 'zustand';

/* Maneja del estado de la ventana modal mediante una interface store*/
interface useStoreModalStore {
    isOpen:boolean;
    onOpen: () => void;
    onClose: () => void;
};

/* Metodos para el manejo de los estados */
export const useStoreModal = create<useStoreModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false}),
}))