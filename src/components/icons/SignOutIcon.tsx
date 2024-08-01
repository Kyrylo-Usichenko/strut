import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12">
        <title>logout</title>
        <g fill="currentColor">
            <path
                data-color="color-2"
                d="M7.829,2.124A.5.5,0,0,0,7,2.5V5H4.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H7V9.5a.5.5,0,0,0,.829.376l4-3.5a.5.5,0,0,0,0-.752Z"
            ></path>
            <path
                d="M2,12H5a1,1,0,0,0,0-2H2V2H5A1,1,0,0,0,5,0H2A2,2,0,0,0,0,2v8A2,2,0,0,0,2,12Z"
                fill="currentColor"
            ></path>
        </g>
    </svg>
);
export default SvgComponent;
