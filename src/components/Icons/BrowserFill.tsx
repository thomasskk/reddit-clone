import * as React from "react";
import { SVGProps } from "react";

const SvgBrowserFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 94H125q-34 0-57.5 23.5T44 175v650q0 34 23.5 57.5T125 906h750q34 0 57.5-23.5T956 825V175q0-34-23.5-57.5T875 94zM250 325q-21 0-35.5-14.5T200 275t14.5-35.5T250 225t35.5 14.5T300 275t-14.5 35.5T250 325zm550-13H400v-75h400v75z"
    />
  </svg>
);

export default SvgBrowserFill;
