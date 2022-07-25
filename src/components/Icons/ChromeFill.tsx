import * as React from "react";
import { SVGProps } from "react";

const SvgChromeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M330 440q19-57 65-91t105-34h445q-49-120-152-199-100-75-224-92Q441 6 320 55q-48 22-81 42-41 27-69 58zm170 180q32 0 59.5-16.5t44-44T620 500t-16.5-59.5-44-44T500 380t-59.5 15.5-44 43T380 500q0 20 10 40 11 37 41.5 58.5T500 620zm35 60q-42 7-84-4t-74-39-47-67L120 205Q41 306 24 434 7 559 53 676q46 120 147 199 37 30 81 52t89 33zm100-300q30 32 41.5 73.5T680 538t-35 77L435 980q13 3 31 4 10 1 34 1 130 0 242-66 109-63 172-172 66-112 66-242 0-65-15-125H635z"
    />
  </svg>
);

export default SvgChromeFill;
