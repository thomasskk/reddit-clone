import * as React from "react";
import { SVGProps } from "react";

const SvgAwardFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 244h-5q18-53-2.5-105t-69-79-103-17T605 96L500 222 395 96q-35-43-90-54T201 58.5t-69 80-2 105.5h-5q-34 0-57.5 23.5T44 325v550q0 34 23.5 57.5T125 956h750q34 0 57.5-23.5T956 875V325q0-34-23.5-57.5T875 244zm-653-49q-1-17 9-31.5t27-19.5q10-4 20-4 25 0 41 20l69 84H252q-14-7-22-20t-8-29zm478 442H538v163h-75V637H300v-75h163V400h75v162h162v75zm48-393H612l70-84q11-13 27.5-17.5T742 144t26 20 10 30.5-8 29.5-22 20z"
    />
  </svg>
);

export default SvgAwardFill;
