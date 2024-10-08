import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm0 2A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgComponent;
