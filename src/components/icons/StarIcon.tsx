import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
    fill?: string;
}
const SvgComponent = ({ fill = "currentColor", ...props }: Props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" {...props}>
        <path
            fill={fill}
            d="m15.144 5.44-4.317-.629L8.9.901a1.041 1.041 0 0 0-1.8 0L5.173 4.811.856 5.44A1 1 0 0 0 .3 7.145l3.123 3.045-.737 4.3a1 1 0 0 0 1.451 1.054L8 13.514l3.861 2.028a1 1 0 0 0 1.451-1.054l-.737-4.3L15.7 7.145a1 1 0 0 0-.554-1.705h-.002Z"
        />
    </svg>
);
export default SvgComponent;
