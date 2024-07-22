import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
        <g fill="#000" clipPath="url(#a)">
            <path
                fillRule="evenodd"
                d="M5.498 7.937 3.981 9.454l-1.445 1.445-.415.415A1 1 0 0 1 .707 9.899l.41-.41a6 6 0 0 1 8.37-8.37l.413-.412a1 1 0 1 1 1.414 1.414l-.415.415L9.454 3.98 7.937 5.498 5.498 7.937ZM4.072 6.534l-1.51 1.511a4 4 0 0 1 5.483-5.483l-1.51 1.51a2.002 2.002 0 0 0-2.463 2.462Z"
                clipRule="evenodd"
            />
            <path d="M6.273 9.99A4 4 0 0 0 9.99 6.274l1.81-1.81a6 6 0 0 1-7.339 7.339l1.81-1.811Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h12v12H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
