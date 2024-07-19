import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13 1H3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3ZM2 4a1 1 0 0 1 1-1h2v10H3a1 1 0 0 1-1-1V4Zm5 9h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7v10Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgComponent;
