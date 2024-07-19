import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" {...props}>
        <path fill="currentColor" d="M9 1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5V4.5a1 1 0 0 1 1-1H9V1Z" />
        <path
            fill="currentColor"
            d="M11.5 5h-5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5Z"
        />
    </svg>
);
export default SvgComponent;
