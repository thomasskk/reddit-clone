import * as React from "react";
import { SVGProps } from "react";

const SvgSpoilerFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M917 336 664 83q-45-45-104.5-60.5t-119 0T336 83L83 336q-45 45-60.5 104.5t0 119T83 664l254 253q44 45 103.5 60.5t119 0T664 917l253-253q45-45 60.5-104.5t0-119T917 336zm-359-89-14 338h-88l-15-338h117zm-2 478q-9 15-24 23.5t-32 8.5-32-8.5-23.5-23.5-8.5-32.5 8.5-32.5 23-24 32-9 32.5 9q23 14 30 40t-6 49z"
    />
  </svg>
);

export default SvgSpoilerFill;
