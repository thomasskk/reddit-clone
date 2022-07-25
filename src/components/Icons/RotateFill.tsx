import * as React from "react";
import { SVGProps } from "react";

const SvgRotateFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M650 150h-69V75q0-9-5-16.5T563 47t-17-3-16 7L380 176q-11 9-11 24t11 24l150 125q9 7 20 7 7 0 14-3.5t12-11 5-16.5v-75h69q41 0 75.5 20t54.5 54.5 20 75.5v100h100V400q0-68-33.5-125.5t-91-91T650 150zM470 651q-7-6-16-7t-17 3-13 11.5-5 16.5v75h-69q-41 0-75.5-20T220 675.5 200 600V500H100v100q0 68 33.5 125.5t91 91T350 850h69v75q0 9 5 16.5t12 11 14 3.5q11 0 20-7l150-125q11-9 11-24t-11-24z"
    />
  </svg>
);

export default SvgRotateFill;
