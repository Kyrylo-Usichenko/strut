import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" {...props}>
        <path
            fill="currentColor"
            d="M7.707 0.293C7.51951 0.105451 7.26519 5.66374e-05 7 0L2 0C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1V11C1 11.2652 1.10536 11.5196 1.29289 11.7071C1.48043 11.8946 1.73478 12 2 12H10C10.2652 12 10.5196 11.8946 10.7071 11.7071C10.8946 11.5196 11 11.2652 11 11V4C10.9999 3.73481 10.8945 3.48049 10.707 3.293L7.707 0.293ZM9 10H3V2H6V4.5C6 4.63261 6.05268 4.75979 6.14645 4.85355C6.24021 4.94732 6.36739 5 6.5 5H9V10Z"
        />
    </svg>
);
export default SvgComponent;
