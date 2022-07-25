import * as React from "react";
import { SVGProps } from "react";

const SvgPauseFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M650 44h200q23 0 39.5 16.5T906 100v800q0 23-16.5 39.5T850 956H650q-23 0-39.5-16.5T594 900V100q0-23 16.5-39.5T650 44zm-500 0h200q23 0 39.5 16.5T406 100v800q0 23-16.5 39.5T350 956H150q-23 0-39.5-16.5T94 900V100q0-23 16.5-39.5T150 44z"
    />
  </svg>
);

export default SvgPauseFill;
