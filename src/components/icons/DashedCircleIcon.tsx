import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="currentColor"
            fillOpacity={0.5}
            fillRule="evenodd"
            d="m15.848 9.561-1.962-.388a6.043 6.043 0 0 0 0-2.346l1.962-.388a8.039 8.039 0 0 1 0 3.122Zm-1.196-6.006-1.661 1.113a6.043 6.043 0 0 0-1.659-1.659l1.113-1.662a8.043 8.043 0 0 1 2.207 2.208ZM9.563.152l-.389 1.962a6.039 6.039 0 0 0-2.346 0L6.439.152a8.04 8.04 0 0 1 3.122 0ZM3.554 1.347 4.668 3.01a6.044 6.044 0 0 0-1.659 1.659L1.347 3.555a8.044 8.044 0 0 1 2.208-2.208ZM.152 6.44a8.04 8.04 0 0 0 0 3.122l1.962-.388a6.039 6.039 0 0 1 0-2.346L.152 6.439Zm1.195 6.006 1.662-1.113a6.043 6.043 0 0 0 1.659 1.659l-1.113 1.662a8.043 8.043 0 0 1-2.208-2.208Zm5.092 3.403.388-1.962a6.043 6.043 0 0 0 2.346 0l.388 1.962a8.039 8.039 0 0 1-3.122 0Zm6.006-1.196-1.113-1.661a6.042 6.042 0 0 0 1.659-1.659l1.662 1.113a8.042 8.042 0 0 1-2.208 2.207Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgComponent;
