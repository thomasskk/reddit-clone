import * as React from "react";
import { SVGProps } from "react";

const SvgComments = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M194 106h412q31 0 55 19.5t31 49.5h62q-4-37-25-67t-53.5-47T606 44H194q-41 0-75.5 20T64 118.5 44 194v317q0 37 17 69.5t47 53.5 67 26v-63q-30-7-49.5-31T106 511V194q0-36 26-62t62-26zm612 138H394q-41 0-75.5 20T264 318.5 244 394v317q0 41 20 75.5t54.5 54.5 75.5 20h128l-2 76q0 11 5.5 19.5T541 970q7 3 15 3 13 1 23-8l124-104h103q41 0 75.5-20t54.5-54.5 20-75.5V394q0-41-20-75.5T881.5 264 806 244zm88 467q0 37-26 62.5T806 799H680l-96 81 1-81H394q-36 0-62-25.5T306 711V394q0-36 26-62t62-26h412q36 0 62 26t26 62v317z"
    />
  </svg>
);

export default SvgComments;
