import { atom, useAtom } from "jotai";

interface AppStore {
    vibeCodeStep: number;
}

const storeAtom = atom<AppStore>({
    vibeCodeStep: 0,
});

export const useAppStore = () => useAtom(storeAtom);