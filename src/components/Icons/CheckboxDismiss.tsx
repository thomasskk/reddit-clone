import * as React from "react";
import { SVGProps } from "react";

const SvgCheckboxDismiss = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 905H175q-34 0-57-23t-23-57V175q0-34 23-57t57-23h650q34 0 57 23t23 57v650q0 31-23.5 55.5T825 905zM175 155q-7 0-13.5 6t-6.5 14v650q0 7 6.5 13.5T175 845h650q8 0 14-6t6-14V175q0-8-6-14t-14-6H175zm150 300h355v75H325v-75z"
    />
  </svg>
);

export default SvgCheckboxDismiss;
