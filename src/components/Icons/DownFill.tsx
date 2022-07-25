import * as React from "react";
import { SVGProps } from "react";

const SvgDownFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 800q-21 0-35-15L15 335l70-70 415 414 415-414 70 70-450 450q-14 15-35 15z"
    />
  </svg>
);

export default SvgDownFill;
