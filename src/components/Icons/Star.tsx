import * as React from "react";
import { SVGProps } from "react";

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M237 943q-26 0-42.5-19T181 880l32-263L33 424q-10-11-13.5-26t1-29.5 16-24.5T64 331l259-50L451 49q8-12 21-19.5t28-7.5 28 7.5T549 49l128 231 260 50q15 3 26.5 13.5t16 25 1 29.5-13.5 26L787 617l32 262q2 16-4 30t-18.5 23-28 10.5T739 937L500 826 261 937q-12 6-24 6zm263-186 256 119-35-280 193-206-277-54L500 89 363 336 86 390l193 206-35 280z"
    />
  </svg>
);

export default SvgStar;
