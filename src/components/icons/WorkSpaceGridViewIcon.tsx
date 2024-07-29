import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.86762 2L5.51048 3.5H2V2H4.86762ZM0 3.5V5.5V9C0 10.1046 0.895431 11 2 11H10C11.1046 11 12 10.1046 12 9V5.5C12 4.39543 11.1046 3.5 10 3.5H7.5L6.5826 0.971008C6.22116 0.368598 5.57015 0 4.86762 0H1C0.447715 0 0 0.447715 0 1V3.5ZM2 5.5L2 9H10V5.5H7H6.36762H2Z"
            fill="currentColor"
        ></path>
    </svg>
);
export default SvgComponent;