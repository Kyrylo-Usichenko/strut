import { SVGProps } from "react";
const SvgComponent = ({ width = 16, height = 16, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width={width}
        height={height}
        fill="currentColor"
        {...props}
    >
        <path
            fill="currentColor"
            d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm4.1 12.3c-.4-.7-1.2-1-2.1-1.3-.7-.2-.9-.6-1-1.2 1.1-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3S5 5.3 5 7c0 1.3.8 2.4 2 2.8-.1.6-.3 1-1 1.2-.9.3-1.7.6-2.1 1.3C2.7 11.2 2 9.7 2 8c0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.7-.7 3.2-1.9 4.3Z"
        />
    </svg>
);
export default SvgComponent;
