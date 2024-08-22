import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox={"0 0 8 8"} fill="none" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 7.23251L7.23251 8L4 4.76749L0.767492 8L0 7.23251L3.23251 4L0 0.767492L0.767492 0L4 3.23251L7.23251 0L8 0.767492L4.76749 4L8 7.23251Z"
            fill="currentColor"
        ></path>
    </svg>
);
export default SvgComponent;
