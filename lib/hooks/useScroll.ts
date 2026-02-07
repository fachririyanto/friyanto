"use client";

import { useState, useEffect } from "react";

export const useScroll = () => {
    const [position, setPosition] = useState<number>(0);

    useEffect(() => {
        const updatePosition = () => {
            setPosition(window.pageYOffset);
        };

        window.addEventListener("scroll", updatePosition);

        // initial call to set position if page is already scrolled on load
        updatePosition();

        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return { position };
};