import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
        <path
            fill="currentColor"
            d="M11.56 6 5.78.22A.75.75 0 0 0 5.25 0H.75A.75.75 0 0 0 0 .75v4.5c0 .199.08.39.22.53L6 11.56a1.5 1.5 0 0 0 2.121 0l3.44-3.439a1.5 1.5 0 0 0 0-2.121ZM3.75 4.875a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Z"
        />
    </svg>
);
export default SvgComponent;
