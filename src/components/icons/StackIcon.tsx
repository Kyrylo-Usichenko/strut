import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="currentColor"
            d="m15.757 5.571-7.5-4.5a.5.5 0 0 0-.514 0l-7.5 4.5a.5.5 0 0 0 0 .858l7.5 4.5a.5.5 0 0 0 .514 0l7.5-4.5a.5.5 0 0 0 0-.858Z"
        />
        <path
            fill="currentColor"
            d="M8 15a.996.996 0 0 1-.496-.132l-7-4a1 1 0 0 1 .992-1.736L8 12.849l6.504-3.717a1 1 0 0 1 .992 1.736l-7 4A.996.996 0 0 1 8 15Z"
        />
    </svg>
);
export default SvgComponent;
