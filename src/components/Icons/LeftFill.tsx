import * as React from "react";
import { SVGProps } from "react";

const SvgLeftFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M690 985 240 535q-15-14-15-35t15-35L690 15l70 70-414 415 414 415z"
    />
  </svg>
);

export default SvgLeftFill;
