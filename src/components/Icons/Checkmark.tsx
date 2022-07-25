import * as React from "react";
import { SVGProps } from "react";

const SvgCheckmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M375 779q-15 0-26-10L78 497l44-44 253 253 528-528 44 44-546 547q-11 10-26 10z"
    />
  </svg>
);

export default SvgCheckmark;
