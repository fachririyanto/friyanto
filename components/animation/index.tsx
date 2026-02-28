"use client";

import { useAppStore } from "@/app/store";

import { Scene as Sand } from "./sand";
import { Scene as Neural } from "./neural";

export function BgSceneAnimation() {
    const [store] = useAppStore();

    switch (store.vibeCodeStep) {
        case 1:
            return <Sand />;
        case 2:
            return <Neural />;
        default:
            return null;
    }
}