import * as React from "react";
import { SVGProps } from "react";

const SvgCollapse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M947 903 700 656h175v-62H625q-13 0-22 9t-9 22v250h62V700l247 247zM344 300 97 53 53 97l247 247H125v62h250q13 0 22-9t9-22V125h-62v175z"
    />
  </svg>
);

export default SvgCollapse;
