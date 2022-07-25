import * as React from "react";
import { SVGProps } from "react";

const SvgModFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M914 120 514 21q-14-4-28 0L86 120q-18 5-30 20t-12 34v426q0 119 98 216 73 73 196 128 74 34 147 54 7 2 15 2t15-2q73-20 147-53 123-56 196-129 98-97 98-216V174q0-19-12-34t-30-20z"
    />
  </svg>
);

export default SvgModFill;
