import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = ({ width = 16, height = 16, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        width={width}
        height={height}
        fill="currentColor"
        {...props}
    >
        <path fill="currentColor" d="M11 5H7V1a1 1 0 0 0-2 0v4H1a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0V7h4a1 1 0 1 0 0-2Z" />
    </svg>
);
export default SvgComponent;
