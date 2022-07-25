import * as React from "react";
import { SVGProps } from "react";

const SvgHomeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1013 1000" {...props}>
    <path
      fill="currentColor"
      d="M976 329 533 32q-15-10-33-10t-32 10L24 332q-10 7-14 18.5T9.5 373t13 18.5T44 399h17v505q0 21 15.5 36t36.5 14h243q10 0 17.5-7.5T381 929V702q-2-47 29-83t77-42q26-3 50 4.5t43 24.5 29.5 40.5T620 695v236q0 10 7 17.5t17 7.5h243q21 1 36.5-14t15.5-36V396h17q12 0 21.5-7.5t13-18.5-.5-22.5-14-18.5z"
    />
  </svg>
);

export default SvgHomeFill;
