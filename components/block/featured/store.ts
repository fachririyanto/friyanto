"use client";

import { atom, useAtom } from "jotai";

interface StoreAtom {
    currentIndex: number;
}

const storeAtom = atom<StoreAtom>({
    currentIndex: 0,
});

export const useStore = () => {
    const [store, setStore] = useAtom(storeAtom);
    return { store, setStore };
};