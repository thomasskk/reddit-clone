import * as React from "react";
import { SVGProps } from "react";

const SvgExpandRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M925 44H675v62h175L603 353l44 44 247-247v175h62V75q0-13-9-22t-22-9zM397 647l-44-44-247 247V675H44v250q0 13 9 22t22 9h250v-62H150z"
    />
  </svg>
);

export default SvgExpandRight;
