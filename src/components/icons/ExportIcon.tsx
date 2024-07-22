import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} {...props}>
        <path d="M11 10H1a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z" />
        <path
            d="M6.5 0h-1a.5.5 0 0 0-.5.5V3H2.5a.5.5 0 0 0-.376.829l3.5 4a.5.5 0 0 0 .752 0l3.5-4A.5.5 0 0 0 9.5 3H7V.5a.5.5 0 0 0-.5-.5Z"
            data-color="color-2"
        />
    </svg>
);
export default SvgComponent;
