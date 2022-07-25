import * as React from "react";
import { SVGProps } from "react";

const SvgShareIos = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M894 550v275q0 28-20.5 48.5T825 894H175q-28 0-48.5-20.5T106 825V550H44v275q0 36 17.5 66t47.5 47.5 66 17.5h650q36 0 66-17.5t47.5-47.5 17.5-66V550h-62zM469 150v550h62V150l147 147 44-44L522 53q-9-9-22-9t-22 9L278 253l44 44z"
    />
  </svg>
);

export default SvgShareIos;
