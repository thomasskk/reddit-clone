import * as React from "react";
import { SVGProps } from "react";

const SvgForwardFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M960 465 510 15l-70 70 364 365H50v100h754L440 915l70 70 450-450q15-14 15-35t-15-35z"
    />
  </svg>
);

export default SvgForwardFill;
