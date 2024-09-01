"use client";
import { useEffect, useState } from "react";
import { useBrandVoices } from "~/context/brandVoiceContext";
import { BrandVoice } from "~/components/shared/BrandVoice/BrandVoice";

export default function BrandVoicePage() {
    const { brandVoices, selectedTitle } = useBrandVoices();
    const [isValid, setIsValid] = useState<boolean>(false);

    useEffect(() => {
        if (selectedTitle && brandVoices.includes(selectedTitle)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [brandVoices, selectedTitle]);

    if (!isValid || !selectedTitle) {
        return <></>;
    }

    return <BrandVoice title={selectedTitle} />;
}
