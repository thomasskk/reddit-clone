import * as React from "react";
import { SVGProps } from "react";

const SvgTopicLifestyle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M900 162H700q-46 1-89 18t-76 49q-5-60-37.5-109.5t-84.5-78T300 12H100q-16 0-26.5 11T62 50v200q1 64 32.5 119t86.5 86.5T300 488h50q16-1 27-11.5t11-26.5-11-27-27-11h-50q-44 0-81.5-21.5t-59-59T137 250V87h163q44 1 81.5 22.5t59 59T463 250v516q-44 9-78 35.5T332 867t-19 83q0 16 10.5 27t26.5 10.5 27-11 11-26.5q0-31 15-56.5t40.5-41T500 837t56.5 15.5 40.5 41 15 56.5q0 16 11 26.5t27 10.5 27-10.5 11-26.5q-1-44-20-83t-53-65.5-78-35.5V400q1-44 22.5-81.5t59-59T700 237h163v163q-1 44-22.5 81.5t-59 59T700 563h-50q-16 0-27 10.5T612.5 600t11 27 26.5 11h50q64-1 119-32.5t86.5-86.5T937 400V200q0-16-10.5-27T900 162z"
    />
  </svg>
);

export default SvgTopicLifestyle;
