import * as React from "react";
import { SVGProps } from "react";

const SvgCaretDownFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 675q-21 0-35-15L215 410l70-70 215 214 215-214 70 70-250 250q-14 15-35 15z"
    />
  </svg>
);

export default SvgCaretDownFill;
