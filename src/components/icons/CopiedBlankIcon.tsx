import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="currentColor"
            d="m6.3 11.7-2-2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L7 9.6l3.3-3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4 4c-.4.4-.9.5-1.4 0Z"
        />
        <path
            fill="currentColor"
            d="M15 1h-3v2h2v11H2V3h2V1H1c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1Z"
        />
        <path fill="currentColor" d="M11 0H5v4h6V0Z" />
    </svg>
);
export default SvgComponent;
