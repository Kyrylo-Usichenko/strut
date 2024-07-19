import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="currentColor"
            d="M14.707 4.707 10.293.293A1 1 0 0 0 9.586 0H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.414a1 1 0 0 0-.293-.707ZM13 14H3V2h6v3a1 1 0 0 0 1 1h3v8Z"
        />
    </svg>
);
export default SvgComponent;
