import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" {...props}>
        <g className="nc-icon-wrapper">
            <path
                fill="currentColor"
                d="M11 2H8V.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V2H1a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z"
                data-color="color-2"
            />
            <path
                fill="currentColor"
                d="M9.1 5.005a1.008 1.008 0 0 0-1.095.9L7.6 10H4.405L4 5.9a1 1 0 1 0-1.99.2l.41 4.1A1.993 1.993 0 0 0 4.405 12H7.6a1.993 1.993 0 0 0 1.99-1.8L10 6.1a1 1 0 0 0-.9-1.095Z"
            />
        </g>
    </svg>
);
export default SvgComponent;
