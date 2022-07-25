import * as React from "react";
import { SVGProps } from "react";

const SvgExpand = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M325 106V44H75q-13 0-22 9t-9 22v250h62V150l247 247 44-44-247-247h175zm569 569v175L647 603l-44 44 247 247H675v62h250q13 0 22-9t9-22V675h-62z"
    />
  </svg>
);

export default SvgExpand;
