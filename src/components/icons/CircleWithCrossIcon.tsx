import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} fill="none" {...props}>
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                d="M7.138.862a.667.667 0 0 0-.943 0L4 3.057 1.805.862a.667.667 0 0 0-.943.943L3.057 4 .862 6.195a.667.667 0 1 0 .943.943L4 4.943l2.195 2.195a.667.667 0 0 0 .943-.943L4.943 4l2.195-2.195a.667.667 0 0 0 0-.943Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h8v8H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
