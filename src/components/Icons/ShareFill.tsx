import * as React from "react";
import { SVGProps } from "react";

const SvgShareFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M960 340 653 32l-71 71 222 222H700q-137 0-263 53-121 52-214 145T78 737q-53 126-53 263h100q0-117 45-224 44-103 123.5-182.5T476 470q107-45 224-45h104L582 647l71 71 307-308q15-14 15-35t-15-35z"
    />
  </svg>
);

export default SvgShareFill;
