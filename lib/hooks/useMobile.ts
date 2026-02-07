import { useState, useEffect } from "react";

export const useMobile = (breakpoint = 1024) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // create a media query list
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

        // define a listener function
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        // set initial value
        setIsMobile(mediaQuery.matches);

        // modern browsers use addEventListener; older ones use addListener
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener("change", handleMediaQueryChange);
        } else {
            mediaQuery.addListener(handleMediaQueryChange);
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener("change", handleMediaQueryChange);
            } else {
                mediaQuery.removeListener(handleMediaQueryChange);
            }
        };
    }, [breakpoint]);

    return isMobile;
};