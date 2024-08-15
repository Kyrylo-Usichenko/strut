import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0)">
            <g clipPath="url(#clip1)">
                <path
                    d="M2.19533 1.138L5.05733 4L2.19533 6.862C2.07389 6.98773 2.0067 7.15613 2.00822 7.33093C2.00973 7.50573 2.07985 7.67294 2.20345 7.79654C2.32706 7.92015 2.49427 7.99026 2.66906 7.99178C2.84386 7.9933 3.01226 7.9261 3.138 7.80466L6.47133 4.47133C6.59631 4.34631 6.66652 4.17677 6.66652 4C6.66652 3.82322 6.59631 3.65368 6.47133 3.52866L3.138 0.195332C3.0765 0.131659 3.00294 0.0808701 2.9216 0.0459308C2.84026 0.0109915 2.75278 -0.00739959 2.66427 -0.00816873C2.57575 -0.00893786 2.48796 0.00793026 2.40603 0.041451C2.3241 0.0749717 2.24966 0.124474 2.18707 0.187069C2.12447 0.249664 2.07497 0.324098 2.04145 0.406029C2.00793 0.48796 1.99106 0.575746 1.99183 0.664266C1.9926 0.752785 2.01099 0.840265 2.04593 0.921601C2.08087 1.00294 2.13166 1.0765 2.19533 1.138Z"
                    fill="currentColor"
                ></path>
            </g>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="8" height="8" fill="currentColor"></rect>
            </clipPath>
            <clipPath id="clip1">
                <rect width="8" height="8" fill="currentColor" transform="translate(0 8) rotate(-90)"></rect>
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
