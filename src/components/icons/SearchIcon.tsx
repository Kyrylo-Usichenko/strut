import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" {...props}>
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                d="M11.72 10.308 9.183 7.772a5.007 5.007 0 1 0-1.411 1.411l2.536 2.537a.999.999 0 0 0 1.412-1.412ZM2.027 5.023a2.996 2.996 0 1 1 5.991 0 2.996 2.996 0 0 1-5.991 0Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h12v12H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
