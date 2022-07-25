import * as React from "react";
import { SVGProps } from "react";

const SvgCaretUpFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M715 660 500 446 285 660l-70-70 250-250q14-15 35-15t35 15l250 250z"
    />
  </svg>
);

export default SvgCaretUpFill;
