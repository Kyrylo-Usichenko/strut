import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path fill="currentColor" d="M8 4a4 4 0 1 1-4 4h4V4Z" />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-2 0A6 6 0 1 1 2 8a6 6 0 0 1 12 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgComponent;
