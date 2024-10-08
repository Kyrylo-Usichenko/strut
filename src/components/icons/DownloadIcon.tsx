import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12">
        <path d="M11,10H1a1,1,0,0,0,0,2H11a1,1,0,0,0,0-2Z" fill="currentColor"></path>
        <path
            data-color="color-2"
            d="M6.5,0h-1A.5.5,0,0,0,5,.5V3H2.5a.5.5,0,0,0-.376.829l3.5,4a.5.5,0,0,0,.752,0l3.5-4A.5.5,0,0,0,9.5,3H7V.5A.5.5,0,0,0,6.5,0Z"
            fill="currentColor"
        ></path>
    </svg>
);
export default SvgComponent;
