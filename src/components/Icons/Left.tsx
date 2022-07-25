import * as React from "react";
import { SVGProps } from "react";

const SvgLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M703 972 253 522q-9-9-9-22t9-22L703 28l44 44-428 428 428 428z"
    />
  </svg>
);

export default SvgLeft;
