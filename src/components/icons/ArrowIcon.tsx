import * as React from "react";
import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
    direction?: "up" | "down" | "left" | "right";
}
const SvgComponent: React.FC<Props> = ({ direction = "right", ...props }) => {
    const transform = () => {
        switch (direction) {
            case "up":
                return "rotate(-90 6 6)";
            case "down":
                return "rotate(90 6 6)";
            case "left":
                return "rotate(180 6 6)";
            case "right":
            default:
                return "";
        }
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" {...props}>
            <path
                transform={transform()}
                fill="currentColor"
                d="M1 7h7.586L6.293 9.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416L8.586 5H1a1 1 0 0 0 0 2Z"
            />
        </svg>
    );
};
export default SvgComponent;
