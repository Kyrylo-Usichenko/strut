import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
        <path
            fill="currentColor"
            d="M6 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
    </svg>
);
export default SvgComponent;
