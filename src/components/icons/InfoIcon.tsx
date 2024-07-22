import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" className="sc-gFqAkR fpdhrb" {...props}>
        <path
            fill="currentColor"
            d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6Zm0 9.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm1.217-3.681c-.372.32-.467.428-.467.681a.75.75 0 1 1-1.5 0c0-.97.596-1.482.992-1.82.372-.319.467-.428.467-.68 0-.137 0-.5-.708-.5a1.535 1.535 0 0 0-.944.42.75.75 0 1 1-1.03-1.091 3.056 3.056 0 0 1 1.935-.827h.002c1.359 0 2.245.803 2.245 1.999 0 .97-.596 1.481-.991 1.819v-.001Z"
        />
    </svg>
);
export default SvgComponent;
