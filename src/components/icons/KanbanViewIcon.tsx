import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
        <path
            fill="currentColor"
            d="M0 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1ZM7 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V1Z"
        />
    </svg>
);
export default SvgComponent;
