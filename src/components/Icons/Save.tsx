import * as React from "react";
import { SVGProps } from "react";

const SvgSave = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M200 986q-23 0-39.5-16T144 930V100q0-23 16.5-39.5T200 44h600q23 0 39.5 16.5T856 100v830q0 16-7.5 29t-21 20.5-28.5 7-28-8.5L500 812 230 978q-14 8-30 9v-1zm6-880v813l294-181 294 181V106H206z"
    />
  </svg>
);

export default SvgSave;
