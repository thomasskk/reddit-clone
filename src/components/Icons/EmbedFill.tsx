import * as React from "react";
import { SVGProps } from "react";

const SvgEmbedFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 94H175q-36 0-66 17.5T61.5 159 44 225v550q0 36 17.5 66t47.5 47.5 66 17.5h650q36 0 66-17.5t47.5-47.5 17.5-66V225q0-36-17.5-66T891 111.5 825 94zM377 623l-53 53-158-157-1-35 12-14 147-147 53 53-124 124zm161 114h-75V262h75v475zm285-207L677 676l-53-53 123-123-123-124 53-53 157 158 1 35z"
    />
  </svg>
);

export default SvgEmbedFill;
