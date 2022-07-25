import * as React from "react";
import { SVGProps } from "react";

const SvgUpvoteFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M936 462 542 25Q525 7 500 7t-42 18L64 462q-11 12-13.5 28.5t4.5 32T76 547t30 9h188v344q0 23 16.5 39.5T350 956h300q23 0 39.5-16.5T706 900V556h188q17 0 31-9t20.5-24.5 4-32T936 462z"
    />
  </svg>
);

export default SvgUpvoteFill;
