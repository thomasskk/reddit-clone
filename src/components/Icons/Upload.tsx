import * as React from "react";
import { SVGProps } from "react";

const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m513 271-29 1-206 206 44 44 147-147v575h62V375l147 147 44-44-196-197zm294-45q-25-62-71.5-109T628 44.5 500 19 372 44.5 264.5 117 193 226q-56 15-98 52.5T33 369 20.5 479t40 103.5T143 655t107 26v-62q-43 0-80.5-20.5T109 543t-27-78 13.5-82 50.5-65 75-34l19-3 6-18q18-53 56.5-94.5T392 104t108-23 108.5 23 89.5 64.5 56 95.5l7 17 18 3q42 8 75.5 34t50.5 65 13.5 82-27 78-61 55.5T750 619v62q58 1 108-25.5t82.5-73T980 479t-13-110-62-91-98-52z"
    />
  </svg>
);

export default SvgUpload;
