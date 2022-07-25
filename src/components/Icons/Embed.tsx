import * as React from "react";
import { SVGProps } from "react";

const SvgEmbed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 94H175q-36 0-66 17.5T61.5 159 44 225v550q0 36 17.5 66t47.5 47.5 66 17.5h650q36 0 66-17.5t47.5-47.5 17.5-66V225q0-36-17.5-66T891 111.5 825 94zm69 681q0 28-20.5 48.5T825 844H175q-28 0-48.5-20.5T106 775V225q0-28 20.5-48.5T175 156h650q28 0 48.5 20.5T894 225v550zM672 328l-44 44 128 128-128 128 44 44 147-146 10-13-1-30zm-344 0L181 474l-10 13 1 29 156 156 44-44-128-128 128-128zm141-28h62v400h-62V300z"
    />
  </svg>
);

export default SvgEmbed;
