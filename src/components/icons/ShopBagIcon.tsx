import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="currentColor"
            d="M7 3a1 1 0 0 1 2 0v1h2V3a3 3 0 0 0-6 0v1h2V3ZM14.87 13.779l-.876-7.889A1 1 0 0 0 13 5H3a1 1 0 0 0-.994.89l-.876 7.889A2 2 0 0 0 3.117 16h9.766a2 2 0 0 0 1.987-2.221Z"
        />
    </svg>
);
export default SvgComponent;
