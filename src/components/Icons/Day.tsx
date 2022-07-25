import * as React from "react";
import { SVGProps } from "react";

const SvgDay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1020 1000" {...props}>
    <path
      fill="currentColor"
      d="M0 469h150v62H0v-62zm850 0h150v62H850v-62zM469 0h62v150h-62V0zm0 850h62v150h-62V850zM124 169l45-45 106 106-45 45zm601 601 45-45 106 106-45 45zm0-540 107-106 44 45-106 106zM124 831l106-106 45 45-106 106zm376-587q-70 0-128.5 34.5t-93 93T244 500t34.5 128.5 93 93T500 756t128.5-34.5 93-93T756 500t-34.5-128.5-93-93T500 244zm0 450q-53 0-97.5-26T332 597.5 306 500t26-97.5 70.5-70.5 97.5-26 97.5 26 70.5 70.5 26 97.5-26 97.5-70.5 70.5-97.5 26z"
    />
  </svg>
);

export default SvgDay;
