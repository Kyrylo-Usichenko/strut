import * as React from "react";
import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
    direction?: "up" | "down" | "left" | "right";
}
const SvgComponent: React.FC<Props> = ({ direction = "right", ...props }) => {
    const transform = () => {
        switch (direction) {
            case "left":
                return "rotate(-90 6 6)";
            case "right":
                return "rotate(90 6 6)";
            case "down":
                return "rotate(180 6 6)";
            case "up":
            default:
                return "";
        }
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
                transform={transform()}
                fill="currentColor"
                fillRule="evenodd"
                d="M7.4 1.899a.85.85 0 0 1 1.201 0l4.5 4.5A.85.85 0 1 1 11.9 7.6L8.85 4.552V13.5a.85.85 0 0 1-1.7 0V4.552L4.101 7.601A.85.85 0 1 1 2.9 6.399z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};
export default SvgComponent;
