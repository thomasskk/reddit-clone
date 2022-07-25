import * as React from "react";
import { SVGProps } from "react";

const SvgUnverifiedFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M917 336 664 83q-45-45-104.5-60.5t-119 0T336 83L83 336q-45 45-60.5 104.5t0 119T83 664l254 253q44 45 103.5 60.5t119 0T664 917l253-253q45-45 60.5-104.5t0-119T917 336zM555 750q-8 15-23 23t-32.5 8-32.5-8-23.5-23-8.5-32.5 8.5-32.5 23.5-24 32.5-9 32.5 9q23 14 29.5 40t-6.5 49zm89-313q-7 18-20 33-15 16-31 30.5T566.5 526t-17 24.5T543 580v30h-90v-29q-1-25 8-48 8-19 22-35 16-16 33-31 15-13 23-21t14-18.5 6-23.5-8-24-21-17.5-28.5-6.5-29.5 7.5-22.5 20T441 412h-94q0-40 20.5-74t55.5-53q39-19 82-18 40-1 76 16 33 15 53 45t19 66q0 22-9 43z"
    />
  </svg>
);

export default SvgUnverifiedFill;
