import * as React from "react";
import { SVGProps } from "react";

const SvgPlayFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M883 453 231 32q-13-9-28.5-9.5t-29 7-21.5 21-8 28.5v842q0 15 8 28.5t21.5 21 29 7T231 968l652-421q12-8 19-20.5t7-26.5-7-26.5-19-20.5z"
    />
  </svg>
);

export default SvgPlayFill;
