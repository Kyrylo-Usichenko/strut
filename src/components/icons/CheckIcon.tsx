import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" className="sc-fThUAz ceXNdi" {...props}>
        <path
            fill="currentColor"
            d="M10.293 1.293 4 7.586 1.707 5.293A1 1 0 0 0 .293 6.707l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z"
        />
    </svg>
);
export default SvgComponent;
