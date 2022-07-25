import * as React from "react";
import { SVGProps } from "react";

const SvgInfoFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 44q-124 0-230 62-103 61-164 164-62 106-62 230t62 230q61 103 164 164 106 62 230 62t230-62q103-61 164-164 62-106 62-230t-62-230q-61-103-164-164-106-62-230-62zm54 732H446V408h108v368zm3-443q-12 22-36 30.5t-47.5-1-35-32-5-47.5 27.5-39 46-11 42 22.5 17 44.5q0 18-9 33z"
    />
  </svg>
);

export default SvgInfoFill;
