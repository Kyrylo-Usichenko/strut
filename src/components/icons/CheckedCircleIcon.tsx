import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM6.667 9.057l4.195-4.195a.667.667 0 0 1 .943.943L7.138 10.47a.667.667 0 0 1-.943 0l-2-2a.667.667 0 0 1 .943-.942l1.529 1.528Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgComponent;
