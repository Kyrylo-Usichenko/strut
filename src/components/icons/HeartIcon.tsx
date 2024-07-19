import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="currentColor"
            d="M7.313 14.705a.999.999 0 0 0 1.374 0l5.995-5.668a4.5 4.5 0 0 0-6.364-6.364c-.121.121-.214.259-.318.389-.104-.13-.197-.268-.318-.389a4.5 4.5 0 0 0-6.364 6.364l5.995 5.668Z"
        />
    </svg>
);
export default SvgComponent;
