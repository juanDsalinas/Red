"use client";

import { useEffect, useState } from "react"; 

import { StoreModal } from "@/components/modals/store-modal";

/* creamos dos contastes las cuales nos serviran para intercambiar
entre los estados mediante un arreglo, el primer elemento se inicializa
automaticamente con el valor de false */
export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    /* valida los efectos secundarios con el cambio del estado */
    useEffect(()=>{
        setIsMounted(true);
    }, []);

    /* valida la renderizacion del componente, si isMounted es false esto
    devuelve null lo cual no renderiza nada */
    if(!isMounted){
        return null;
    }   

    return (
        <> 
            <StoreModal/>
        </>
    );
};