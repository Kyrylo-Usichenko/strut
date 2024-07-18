import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path fill="currentColor" d="M5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        <path
            fill="currentColor"
            d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8Zm0 14c-3.309 0-6-2.691-6-6 0-.563.083-1.105.229-1.622 2.092-.878 5.097.717 8.317-2.196 1.131 1.79 2.471 2.571 3.379 2.914.044.295.075.596.075.904 0 3.309-2.691 6-6 6Z"
        />
    </svg>
);
export default SvgComponent;
