import * as React from "react";
import { SVGProps } from "react";

const SvgDistinguishFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 0 1025 1000" {...props}>
    <path
      fill="currentColor"
      d="M976 465q-106-30-195-93T628.5 219.5 535 24q-3-12-13-19t-22-7-22 7-13 19q-30 106-93 195.5T219.5 372 24 465q-12 3-19 13t-7 22.5 7 22T24 535q106 30 195 93.5T371.5 781 465 976q3 12 13 19t22.5 7 22-7 12.5-19q30-106 93.5-195T781 628.5 976 535q12-3 19.5-13t7.5-22-7.5-22-19.5-13z"
    />
  </svg>
);

export default SvgDistinguishFill;
