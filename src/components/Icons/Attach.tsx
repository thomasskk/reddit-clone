import * as React from "react";
import { SVGProps } from "react";

const SvgAttach = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M335 958q-89 0-163-49.5T64 777 47.5 607.5 128 457L519 66q40-39 92.5-52.5T717 14t92.5 53.5 53.5 92 0 105.5-53 92L419 749q-23 22-53 29.5t-60.5-.5-53-30.5-30.5-53-.5-60.5 29.5-53l178-178 45 44-178 178q-17 16-17 39.5t16.5 40 40 16.5 39.5-17l391-391q28-27 37.5-64t0-74-37.5-64-64.5-36.5-73.5 0-65 35.5L172 501q-44 44-60 104t0 119.5T172 828t103.5 60 119.5 0 104-60l411-412 44 44-412 412q-41 41-94.5 63.5T335 958z"
    />
  </svg>
);

export default SvgAttach;
