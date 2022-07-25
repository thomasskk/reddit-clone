import * as React from "react";
import { SVGProps } from "react";

const SvgBrowser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 94H125q-34 0-57.5 23.5T44 175v650q0 34 23.5 57.5T125 906h750q34 0 57.5-23.5T956 825V175q0-34-23.5-57.5T875 94zm19 731q0 8-5.5 13.5T875 844H125q-8 0-13.5-5.5T106 825V175q0-8 5.5-13.5T125 156h750q8 0 13.5 5.5T894 175v650zM200 275q0 21 14.5 35.5T250 325t35.5-14.5T300 275t-14.5-35.5T250 225t-35.5 14.5T200 275zm200-31h400v62H400v-62z"
    />
  </svg>
);

export default SvgBrowser;
