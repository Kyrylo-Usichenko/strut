import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
    fill?: string;
}
const SvgComponent = ({ fill = "currentColor", ...props }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14px"
        height="14px"
        viewBox="0 0 32 32"
        fill="currentColor"
        {...props}
    >
        <path
            fill={fill}
            d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h16.128q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-16.128q-0.832 0-1.44 0.576t-0.576 1.44v16.16z"
        />
    </svg>
);
export default SvgComponent;
