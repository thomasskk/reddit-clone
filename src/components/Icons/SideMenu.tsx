import * as React from "react";
import { SVGProps } from "react";

const SvgSideMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 44H100q-23 0-39.5 16.5T44 100v800q0 23 16.5 39.5T100 956h400q23 0 39.5-16.5T556 900V100q0-23-16.5-39.5T500 44zm-6 850H106V106h388v788zm428-572-44-44-200 200q-9 9-9 22t9 22l200 200 44-44-178-178zm-747-78h250v62H175v-62zm0 150h250v62H175v-62zm0 150h250v62H175v-62zm0 150h250v62H175v-62z"
    />
  </svg>
);

export default SvgSideMenu;
