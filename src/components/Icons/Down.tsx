import * as React from "react";
import { SVGProps } from "react";

const SvgDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 781q-13 0-22-9L28 322l44-44 428 428 428-428 44 44-450 450q-9 9-22 9z"
    />
  </svg>
);

export default SvgDown;
