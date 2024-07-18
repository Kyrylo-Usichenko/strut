import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
        <path
            fill="currentColor"
            d="M4 0H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM11 0H8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM4 7H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1ZM11 7H8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z"
        />
    </svg>
);
export default SvgComponent;
