import * as React from "react";
import { SVGProps } from "react";

const SvgSpam = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M603 503 500 606 397 503l-44 44 103 103-103 103 44 44 103-103 103 103 44-44-103-103 103-103zM825 44H175q-36 0-66 17.5T61.5 109 44 175v650q0 36 17.5 66t47.5 47.5 66 17.5h650q36 0 66-17.5t47.5-47.5 17.5-66V175q0-36-17.5-66T891 61.5 825 44zm0 850H175q-28 0-48.5-20.5T106 825V386q32 20 69 20h650q37 0 69-20v439q0 28-20.5 48.5T825 894zm69-619q0 28-20.5 48.5T825 344H175q-28 0-48.5-20.5T106 275V175q0-28 20.5-48.5T175 106h650q28 0 48.5 20.5T894 175v100z"
    />
  </svg>
);

export default SvgSpam;
