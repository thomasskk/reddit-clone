import * as React from "react";
import { SVGProps } from "react";

const SvgDayFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1020 1000" {...props}>
    <path
      fill="currentColor"
      d="M0 450h150v100H0V450zm850 0h150v100H850V450zM450 0h100v150H450V0zm0 850h100v150H450V850zM111 182l71-71 106 106-71 71zm601 601 71-71 106 106-71 71zm0-566 106-106 71 71-106 106zM111 818l106-106 71 71-106 106zm133-318q0 70 34.5 128.5t93 93T500 756t128.5-34.5 93-93T756 500t-34.5-128.5-93-93T500 244t-128.5 34.5-93 93T244 500z"
    />
  </svg>
);

export default SvgDayFill;
