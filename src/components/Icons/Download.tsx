import * as React from "react";
import { SVGProps } from "react";

const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M894 550v275q0 28-20.5 48.5T825 894H175q-28 0-48.5-20.5T106 825V550H44v275q0 36 17.5 66t47.5 47.5 66 17.5h650q36 0 66-17.5t47.5-47.5 17.5-66V550h-62zM487 729h13l17-1 205-206-44-44-147 147V50h-62v575L322 478l-44 44 196 197z"
    />
  </svg>
);

export default SvgDownload;
