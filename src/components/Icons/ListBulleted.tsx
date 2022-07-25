import * as React from "react";
import { SVGProps } from "react";

const SvgListBulleted = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M350 469h600v62H350v-62zm0-300h600v62H350v-62zm0 600h600v62H350v-62zM75 200q0 31 22 53t53 22 53-22 22-53-22-53-53-22-53 22-22 53zm0 300q0 31 22 53t53 22 53-22 22-53-22-53-53-22-53 22-22 53zm0 300q0 31 22 53t53 22 53-22 22-53-22-53-53-22-53 22-22 53z"
    />
  </svg>
);

export default SvgListBulleted;
