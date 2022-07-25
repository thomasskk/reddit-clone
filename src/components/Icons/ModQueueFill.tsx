import * as React from "react";
import { SVGProps } from "react";

const SvgModQueueFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M806 125q0-34-23.5-57.5T725 44H125q-34 0-57.5 23.5T44 125v600q0 34 23.5 57.5T125 806V275q0-41 20-75.5t54.5-54.5 75.5-20h531zM425 441v168q0 33 23 60 19 23 52 41 23 13 52 23l23 8 23-8q29-10 52-23 33-18 52-41 23-27 23-60V441l-150-38zm450-247H275q-34 0-57.5 23.5T194 275v600q0 34 23.5 57.5T275 956h600q34 0 57.5-23.5T956 875V275q0-34-23.5-57.5T875 194zm-75 415q0 67-49 118-36 38-95 64-33 15-63 22-18 5-36 0-30-7-63-22-59-26-95-64-49-51-49-118V441q0-26 16-46.5t41-26.5l150-38q18-4 36 0l150 38q25 6 41 26.5t16 46.5v168z"
    />
  </svg>
);

export default SvgModQueueFill;
