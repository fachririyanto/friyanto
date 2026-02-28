"use client";

export function ButtonMyWork() {
    const onClick = () => {
        const $elm = document.getElementById("block-featured-work");

        if ($elm) {
            $elm.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <button
            type="button"
            className="relative z-10 md:text-lg border-b border-foreground"
            onClick={onClick}
            >
            Or see my work below
        </button>
    );
}