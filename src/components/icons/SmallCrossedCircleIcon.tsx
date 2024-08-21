import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.49846 7.9366C5.49847 7.9366 5.49845 7.93659 5.49846 7.9366L3.98114 9.45389C3.98113 9.45389 3.98114 9.45389 3.98114 9.45389L2.53565 10.8994C2.53565 10.8994 2.53566 10.8994 2.53565 10.8994L2.12132 11.3137C1.7308 11.7042 1.09763 11.7042 0.707107 11.3137C0.316583 10.9232 0.316583 10.29 0.707107 9.89949L1.11792 9.48868C0.414191 8.50563 0 7.30118 0 6C0 2.68629 2.68629 0 6 0C7.30118 0 8.50563 0.414191 9.48868 1.11792L9.8995 0.707103C10.29 0.316579 10.9232 0.316579 11.3137 0.707103C11.7042 1.09763 11.7042 1.73079 11.3137 2.12132L10.8994 2.53563C10.8994 2.53564 10.8994 2.53563 10.8994 2.53563L9.4539 3.98116C9.45391 3.98116 9.4539 3.98115 9.4539 3.98116L7.93659 5.49844C7.93659 5.49843 7.93659 5.49845 7.93659 5.49844L5.49846 7.9366ZM4.07219 6.5344L2.56157 8.04503C2.2049 7.44662 2 6.74724 2 6C2 3.79086 3.79086 2 6 2C6.74724 2 7.44662 2.2049 8.04503 2.56157L6.5344 4.07219C6.36429 4.02514 6.18508 4 6 4C4.89543 4 4 4.89543 4 6C4 6.18508 4.02514 6.36429 4.07219 6.5344Z"
                fill="currentColor"
            ></path>
            <path
                d="M6.27263 9.99086C8.26453 9.85678 9.85678 8.26453 9.99086 6.27263L11.8011 4.46234C11.9309 4.95308 12 5.46847 12 6C12 9.31371 9.31371 12 6 12C5.46847 12 4.95308 11.9309 4.46234 11.8011L6.27263 9.99086Z"
                fill="currentColor"
            ></path>
        </g>
        <defs>
            <clipPath id="a">
                <rect width="12" height="12" fill="currentColor"></rect>
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
