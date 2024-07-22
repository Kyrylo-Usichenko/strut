import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" {...props}>
        <path
            fill="currentColor"
            d="M6 1C2.423 1 .2 5.367.105 5.553a1 1 0 0 0 0 .894C.2 6.633 2.423 11 6 11c3.577 0 5.8-4.367 5.9-4.553a1 1 0 0 0 0-.894C11.8 5.367 9.577 1 6 1Zm0 8C4.316 9 2.829 7.129 2.148 6.006 2.718 5.076 4.193 3 6 3c1.684 0 3.171 1.872 3.852 2.994C9.282 6.924 7.807 9 6 9Z"
        />
        <path fill="currentColor" d="M6 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
);
export default SvgComponent;
