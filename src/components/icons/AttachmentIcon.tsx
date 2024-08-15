import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.67 2.507a.85.85 0 0 1 0 1.202L3.524 7.855a2.464 2.464 0 0 0 3.485 3.484l5.925-5.926a.836.836 0 0 0-1.181-1.182L5.87 10.113A.85.85 0 0 1 4.669 8.91l5.881-5.88a2.536 2.536 0 0 1 3.585 3.586L8.201 12.55a4.164 4.164 0 0 1-5.889-5.888l.006-.005 4.149-4.15a.85.85 0 0 1 1.202 0Z"
            clipRule="evenodd"
        ></path>
    </svg>
);
export default SvgComponent;
