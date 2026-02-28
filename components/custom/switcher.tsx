"use client";

import { useState } from "react";

interface SwitcherProps {
    isOn?: boolean;
    activeColor?: string;
    onToggle?: (isOn: boolean) => void;
}

export function Switcher({ isOn = false, activeColor = "bg-green-500", onToggle }: SwitcherProps) {
    const handleToggle = () => {
        if (onToggle) {
            onToggle(!isOn);
        }
    };

    return (
        <button
            type="button"
            className={`w-9 h-5 rounded-full transition-colors duration-300 ${isOn ? activeColor : "bg-gray-300"}`}
            onClick={handleToggle}
            >
            <span
                className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-4.5" : "translate-x-0.5"}`}
            />
        </button>
    );
}
