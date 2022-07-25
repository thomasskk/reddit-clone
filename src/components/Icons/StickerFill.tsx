import * as React from "react";
import { SVGProps } from "react";

const SvgStickerFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M613 675v257l319-320H675q-26 1-44 19t-18 44zm-75 59q-19 3-38 4-53 1-101-22.5T319 649l-21-31 61-43 22 31q29 34 71.5 48t86.5 3q7-51 45.5-85t90.5-35h281V175q0-36-17.5-66T891 61.5 825 44H175q-36 0-66 17.5T61.5 109 44 175v650q0 36 17.5 66t47.5 47.5 66 17.5h363V734zm162-409q31 0 53 22t22 53-22 53-53 22-53-22-22-53 22-53 53-22zm-475 75q0-31 22-53t53-22 53 22 22 53-22 53-53 22-53-22-22-53z"
    />
  </svg>
);

export default SvgStickerFill;
