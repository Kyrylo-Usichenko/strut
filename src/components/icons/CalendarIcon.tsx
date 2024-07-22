import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5 0a1 1 0 0 0-1 1v1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4V1a1 1 0 1 0-2 0v1H6V1a1 1 0 0 0-1-1Zm9 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgComponent;
