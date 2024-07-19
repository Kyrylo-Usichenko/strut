import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
        <path
            fill="currentColor"
            d="M5.522 9.09A6.1 6.1 0 0 0 4.5 9H2.74l1.038 2.269a1.251 1.251 0 1 0 2.273-1.04L5.522 9.09Z"
        />
        <path
            fill="currentColor"
            d="M10.646.022a.5.5 0 0 0-.562.2A6.935 6.935 0 0 1 4.5 3h-2a2.5 2.5 0 1 0 0 5h2a6.935 6.935 0 0 1 5.584 2.778A.499.499 0 0 0 11 10.5V.5a.5.5 0 0 0-.354-.478Z"
        />
    </svg>
);
export default SvgComponent;
