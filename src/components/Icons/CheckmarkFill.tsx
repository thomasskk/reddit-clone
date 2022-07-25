import * as React from "react";
import { SVGProps } from "react";

const SvgCheckmarkFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M375 798q-23 0-39-16L65 510l70-70 240 239 515-514 70 70-546 547q-16 16-39 16z"
    />
  </svg>
);

export default SvgCheckmarkFill;
