import * as React from "react";
import { SVGProps } from "react";

const SvgAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M106 300H44V100q0-23 16.5-39.5T100 44h200v62H106v194zm194 656H100q-23 0-39.5-16.5T44 900V700h62v194h194v62zm600 0H700v-62h194V700h62v200q0 23-16.5 39.5T900 956zm56-656h-62V106H700V44h200q23 0 39.5 16.5T956 100v200z"
    />
  </svg>
);

export default SvgAspectRatio;
