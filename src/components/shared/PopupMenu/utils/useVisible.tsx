"use client";

import { useState, useEffect, useRef, useCallback } from "react";

function useVisible(initialIsVisible: boolean) {
    const [isVisible, setIsVisible] = useState<boolean>(initialIsVisible);
    const ref = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsVisible(false);
        }
    }, []);

    const handleEscapePress = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsVisible(false);
            }
        },
        [setIsVisible]
    );

    useEffect(() => {
        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscapePress);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapePress);
        };
    }, [isVisible, handleClickOutside, handleEscapePress]);

    return { ref, isVisible, setIsVisible };
}

export { useVisible };
