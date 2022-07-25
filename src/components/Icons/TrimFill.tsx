import * as React from "react";
import { SVGProps } from "react";

const SvgTrimFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M970 100H829L500 429 378 308q22-39 22-83 0-48-23.5-88T313 73.5 225 50t-88 23.5T73.5 137 50 225t23.5 88 63.5 63.5 88 23.5q44 0 83-22l121 122-121 122q-39-22-83-22-48 0-88 23.5T73.5 687 50 775t23.5 88 63.5 63.5 88 23.5 88-23.5 63.5-63.5 23.5-88q0-44-22-83zM225 300q-31 0-53-22t-22-53 22-53 53-22 53 22 22 53-22 53-53 22zm0 550q-31 0-53-22t-22-53 22-53 53-22 53 22 22 53-22 53-53 22zm340-215 264 264 141 1-335-335z"
    />
  </svg>
);

export default SvgTrimFill;
