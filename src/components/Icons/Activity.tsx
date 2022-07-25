import * as React from "react";
import { SVGProps } from "react";

const SvgActivity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M475 975q-22 0-38.5-16.5T420 920V580H200q-34 0-57-23t-23-57q0-16 4.5-27.5T140 450L480 45q15-18 37.5-19T555 40q20 20 20 40v340h225q34 0 57 23t23 57q0 15-4.5 27T860 550L520 955q-20 20-45 20zm40-875L190 490q-7 7 0 15 0 3 5.5 6.5t9.5 3.5h285v385l325-390q8-7 0-15 0-4-5.5-7t-9.5-3H515V100z"
    />
  </svg>
);

export default SvgActivity;
