import * as React from "react";
import { SVGProps } from "react";

const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M50 469h900v62H50v-62zm100-325h700v62H150v-62zm0 650h700v62H150v-62z"
    />
  </svg>
);

export default SvgMenu;
