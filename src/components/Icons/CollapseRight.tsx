import * as React from "react";
import { SVGProps } from "react";

const SvgCollapseRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M375 594H125v62h175L53 903l44 44 247-247v175h62V625q0-13-9-22t-22-9zM947 97l-44-44-247 247V125h-62v250q0 13 9 22t22 9h250v-62H700z"
    />
  </svg>
);

export default SvgCollapseRight;
