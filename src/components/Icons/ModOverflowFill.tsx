import * as React from "react";
import { SVGProps } from "react";

const SvgModOverflowFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M914 120 514 21q-14-4-27 0L87 120q-19 5-31 20t-12 34v426q0 119 98 216 73 73 196 128 74 34 147 54 7 2 15 2t15-2q73-20 147-53 123-56 196-129 98-97 98-216V174q0-19-12-34t-30-20zM527 651q-11 12-27 12t-27-12L247 425l53-53 200 200 200-200 53 53z"
    />
  </svg>
);

export default SvgModOverflowFill;
