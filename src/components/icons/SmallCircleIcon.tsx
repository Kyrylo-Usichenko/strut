import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                fill="currentColor"
            ></path>
        </g>
        <defs>
            <clipPath id="a">
                <rect width="12" height="12" fill="currentColor"></rect>
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
