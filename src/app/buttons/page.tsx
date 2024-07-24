"use client";

import Button from "../../components/shared/button/Button";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";

function SvgIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.52199 9.09C5.18446 9.03135 4.84258 9.00125 4.49999 9H2.73999L3.77799 11.269C3.91587 11.5706 4.16786 11.8051 4.47857 11.921C4.78928 12.0369 5.13329 12.0246 5.43499 11.887C5.58436 11.8187 5.7188 11.7215 5.83062 11.6012C5.94243 11.4809 6.02943 11.3397 6.08664 11.1857C6.14385 11.0317 6.17015 10.8679 6.16403 10.7038C6.15791 10.5396 6.1195 10.3783 6.05099 10.229L5.52199 9.09Z"
                fill="currentColor"
            ></path>
            <path
                d="M10.646 0.0219302C10.5433 -0.00954129 10.4331 -0.0070834 10.3319 0.0289397C10.2307 0.0649629 10.1438 0.132635 10.084 0.22193C9.43481 1.08885 8.59159 1.79167 7.62191 2.27408C6.65223 2.75648 5.58304 3.00507 4.5 2.99993H2.5C1.83696 2.99993 1.20107 3.26332 0.732233 3.73216C0.263392 4.201 0 4.83689 0 5.49993C0 6.16297 0.263392 6.79886 0.732233 7.2677C1.20107 7.73654 1.83696 7.99993 2.5 7.99993H4.5C5.58304 7.99479 6.65223 8.24338 7.62191 8.72579C8.59159 9.20819 9.43481 9.91101 10.084 10.7779C10.1297 10.8463 10.1916 10.9023 10.2642 10.941C10.3368 10.9798 10.4177 11 10.5 10.9999C10.5495 10.9995 10.5986 10.9921 10.646 10.9779C10.7484 10.9467 10.8381 10.8833 10.9018 10.7973C10.9655 10.7112 11 10.607 11 10.4999V0.49993C11 0.392852 10.9655 0.288616 10.9018 0.202566C10.8381 0.116516 10.7484 0.0531971 10.646 0.0219302Z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

function PlusSignIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11 5L7 5L7 1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1L5 5L1 5C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7L5 7L5 11C5 11.2652 5.10536 11.5196 5.29289 11.7071C5.48043 11.8946 5.73478 12 6 12C6.26522 12 6.51957 11.8946 6.70711 11.7071C6.89464 11.5196 7 11.2652 7 11L7 7L11 7C11.2652 7 11.5196 6.89464 11.7071 6.70711C11.8946 6.51957 12 6.26522 12 6C12 5.73478 11.8946 5.48043 11.7071 5.29289C11.5196 5.10536 11.2652 5 11 5Z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

export default function BrandVoiceButton() {
    return (
        <>
            <Button
                icon={<SvgIcon />}
                text="Brand Voice"
                tooltipLabel="Brand Voice"
                onClick={() => console.log("Brand Voice button clicked")}
            />
            <Button
                icon={<SvgIcon />}
                text="Brand Voice (no tooltip)"
                // tooltipLabel="Brand Voice"
                onClick={() => console.log("Brand Voice button clicked")}
            />
            <Button
                // icon={<SvgIcon />}
                text="Brand Voice (no icon)"
                tooltipLabel="Brand Voice"
                onClick={() => console.log("Brand Voice button clicked")}
            />
            <Button
                // icon={<SvgIcon />}
                text="Share"
                tooltipLabel="Share Workspace"
                withoutBackground={true}
                onClick={() => console.log("Share button clicked")}
            />
            <ButtonIconOnly
                icon={<PlusSignIcon />}
                tooltipLabel="New Doc"
                onClick={() => console.log("PlusButton clicked")}
            />
        </>
    );
}
