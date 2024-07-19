import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="currentColor"
            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm2.629 11.618L8 10.236l-2.629 1.382.5-2.927-2.124-2.073 2.939-.427L8 3.528l1.314 2.663 2.939.427-2.126 2.073.502 2.927Z"
        />
    </svg>
);
export default SvgComponent;
