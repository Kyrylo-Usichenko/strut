import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM2 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgComponent;
