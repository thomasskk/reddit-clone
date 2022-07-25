import * as React from "react";
import { SVGProps } from "react";

const SvgRightFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m310 985-70-70 414-415L240 85l70-70 450 450q15 14 15 35t-15 35z"
    />
  </svg>
);

export default SvgRightFill;
