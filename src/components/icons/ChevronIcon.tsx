import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} fill="none" {...props}>
        <g clipPath="url(#a)">
            <g clipPath="url(#b)">
                <path
                    fill="#131414"
                    d="M6.862 2.195 4 5.057 1.138 2.195a.667.667 0 0 0-.943.943L3.53 6.471a.667.667 0 0 0 .942 0l3.334-3.333a.667.667 0 1 0-.943-.943Z"
                />
            </g>
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h8v8H0z" />
            </clipPath>
            <clipPath id="b">
                <path fill="#fff" d="M0 0h8v8H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
