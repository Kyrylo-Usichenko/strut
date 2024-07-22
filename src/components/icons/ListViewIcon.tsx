import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
        <path fill="currentColor" fillOpacity={0.8} d="M11 5H1a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2Z" />
        <path fill="currentColor" d="M11 1H1a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2ZM5 9H1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Z" />
    </svg>
);
export default SvgComponent;
