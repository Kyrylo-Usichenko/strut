import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.7"
            d="M11.89 11.889 8 7.999m0 0L4.111 4.112M8.001 8l3.889-3.89M8 8l-3.889 3.889"
        ></path>
    </svg>
);
export default SvgComponent;
