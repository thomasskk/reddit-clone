import * as React from "react";
import { SVGProps } from "react";

const SvgPremium = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M975 81q-10-12-25-12h-44q-202 0-398-49-8-2-15 0Q296 69 94 69H50q-15 0-24.5 12T20 108q49 196 49 398v193q0 55 27.5 102t74.5 74.5T273.5 903t109 18.5T481 975q8 6 19 6t19-6q45-35 98.5-53.5t109-18.5T829 875.5t74.5-74.5T931 699V506q0-202 49-398 4-15-5-27zM94 131q190 0 375-42v355H130q-6-158-41-313h5zm37 568V506h338v387q-91-52-196-53-39 0-71.5-19T150 769.5 131 699zm596 141q-105 1-196 53V506h338v193q0 38-19 70.5T798.5 821 727 840zm144-396H531V89q185 42 375 42h5q-35 155-41 313h1z"
    />
  </svg>
);

export default SvgPremium;
