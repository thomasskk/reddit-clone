import * as React from "react";
import { SVGProps } from "react";

const SvgSideMenuFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 44H100q-23 0-39.5 16.5T44 100v800q0 23 16.5 39.5T100 956h400q23 0 39.5-16.5T556 900V100q0-23-16.5-39.5T500 44zm-75 712H175v-62h250v62zm0-150H175v-62h250v62zm0-150H175v-62h250v62zm0-150H175v-62h250v62zm510 29-70-70-200 200q-15 14-15 35t15 35l200 200 70-70-164-165z"
    />
  </svg>
);

export default SvgSideMenuFill;
