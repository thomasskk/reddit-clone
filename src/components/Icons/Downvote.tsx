import * as React from "react";
import { SVGProps } from "react";

const SvgDownvote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 994q-25 0-42-19L64 538q-11-12-13.5-28.5t4-32T75 453t31-9h188V100q0-23 16.5-39.5T350 44h300q23 0 39.5 16.5T706 100v344h188q16 0 30 9t21 24.5 4.5 32T936 538L542 975q-17 19-42 19zm-5-61zM120 507l380 421 380-421H644V106H356v400z"
    />
  </svg>
);

export default SvgDownvote;
