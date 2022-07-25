import * as React from "react";
import { SVGProps } from "react";

const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M850 956H650q-23 0-39.5-16.5T594 900V100q0-23 16.5-39.5T650 44h200q23 0 39.5 16.5T906 100v800q0 23-16.5 39.5T850 956zm-194-62h188V106H656v788zm-306 62H150q-23 0-39.5-16.5T94 900V100q0-23 16.5-39.5T150 44h200q23 0 39.5 16.5T406 100v800q0 23-16.5 39.5T350 956zm-194-62h188V106H156v788z"
    />
  </svg>
);

export default SvgPause;
