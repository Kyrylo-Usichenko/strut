import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="currentColor"
            d="M15 11V4c0-1.136-.864-2-2-2H3c-1.136 0-2 .864-2 2v7H0v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1h-1ZM3 4h10v7H3V4Z"
        />
    </svg>
);
export default SvgComponent;
