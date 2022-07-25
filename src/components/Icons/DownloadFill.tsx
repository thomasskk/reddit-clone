import * as React from "react";
import { SVGProps } from "react";

const SvgDownloadFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 550v275q0 21-14.5 35.5T825 875H175q-21 0-35.5-14.5T125 825V550H25v275q0 41 20 75.5T99.5 955t75.5 20h650q41 0 75.5-20t54.5-54.5 20-75.5V550H875zM479 748h21l24-2 211-211-70-70-115 114V50H450v529L335 465l-70 70 196 197z"
    />
  </svg>
);

export default SvgDownloadFill;
