"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type BrandVoiceType = string;

interface BrandVoiceContextProps {
    brandVoices: BrandVoiceType[];
    addBrandVoice: (newTitle: BrandVoiceType) => void;
    updateBrandVoice: (oldTitle: BrandVoiceType, newTitle: BrandVoiceType) => void;
    deleteBrandVoice: (title: BrandVoiceType) => void;
    selectedTitle: BrandVoiceType | null;
    setSelectedTitle: (title: BrandVoiceType | null) => void;
}

export const BrandVoiceContext = createContext<BrandVoiceContextProps | null>(null);

export const BrandVoiceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [brandVoices, setBrandVoices] = useState<BrandVoiceType[]>([]);
    const [selectedTitle, setSelectedTitle] = useState<BrandVoiceType | null>(null);

    const addBrandVoice = (newTitle: BrandVoiceType) => {
        setBrandVoices([...brandVoices, newTitle]);
    };

    const deleteBrandVoice = (title: BrandVoiceType) => {
        setBrandVoices(brandVoices.filter((voice) => voice !== title));
    };

    const updateBrandVoice = (oldTitle: BrandVoiceType, newTitle: BrandVoiceType) => {
        setBrandVoices((prev) => prev.map((voice) => (voice === oldTitle ? newTitle : voice)));
    };

    return (
        <BrandVoiceContext.Provider
            value={{
                brandVoices,
                addBrandVoice,
                updateBrandVoice,
                deleteBrandVoice,
                selectedTitle,
                setSelectedTitle
            }}
        >
            {children}
        </BrandVoiceContext.Provider>
    );
};

export const useBrandVoices = () => {
    const context = useContext(BrandVoiceContext);
    if (!context) {
        throw new Error();
    }
    return context;
};
