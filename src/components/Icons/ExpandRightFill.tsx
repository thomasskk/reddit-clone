import * as React from "react";
import { SVGProps } from "react";

const SvgExpandRightFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M365 565 212 718l-90-90q-7-7-16-9t-18 2-14 12-5 17v250q0 13 9 22t22 9h250q9 0 17-5t12-14 2-18-9-16l-90-90 153-153zM900 69H650q-9 0-17 5t-12 14-2 18 9 16l90 90-153 153 70 70 153-153 90 90q9 9 22 9 6 0 12-2 9-4 14-12t5-17V100q0-13-9-22t-22-9z"
    />
  </svg>
);

export default SvgExpandRightFill;
