import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
        <g clipPath="url(#a)">
            <path
                fill="#000"
                fillRule="evenodd"
                d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm2 0A6 6 0 1 1 0 6a6 6 0 0 1 12 0ZM8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h12v12H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
