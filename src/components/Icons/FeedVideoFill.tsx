import * as React from "react";
import { SVGProps } from "react";

const SvgFeedVideoFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M806 125q0-34-23.5-57.5T725 44H125q-34 0-57.5 23.5T44 125v600q0 34 23.5 57.5T125 806V275q0-41 20-75.5t54.5-54.5 75.5-20h531zm69 69H275q-34 0-57.5 23.5T194 275v600q0 34 23.5 57.5T275 956h600q34 0 57.5-23.5T956 875V275q0-34-23.5-57.5T875 194zm-84 445L482 838q-17 11-37.5 12t-38.5-9-28.5-27.5T367 775V377q0-21 10.5-38.5T406 311t38.5-9 37.5 12l309 199q16 10 25 27t9 36-9 36-25 27zM442 775l308-199-308-199v398z"
    />
  </svg>
);

export default SvgFeedVideoFill;
