import * as React from "react";
import { SVGProps } from "react";

const SvgPopularFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 19q-131 0-243 65-109 64-173 173-65 112-65 243t65 243q64 109 173 173 112 65 243 65t243-65q109-64 173-173 65-112 65-243t-66-243Q852 148 743 85 631 19 500 19zM171 758l348-348-88-88q-7-7-9-16t2-18 11.5-14 17.5-5h247q13 0 22 9t9 22v247q0 10-5 17.5T712 576t-18 2-16-9l-88-88-348 348q-40-31-71-71z"
    />
  </svg>
);

export default SvgPopularFill;
