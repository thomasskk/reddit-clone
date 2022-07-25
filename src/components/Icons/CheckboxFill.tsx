import * as React from "react";
import { SVGProps } from "react";

const SvgCheckboxFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 94H175q-34 0-57.5 23.5T94 175v650q0 34 23.5 57.5T175 906h650q34 0 57.5-23.5T906 825V175q0-34-23.5-57.5T825 94zM451 626q-10 12-26 12t-26-12L299 526l53-53 73 74 224-224 53 53z"
    />
  </svg>
);

export default SvgCheckboxFill;
