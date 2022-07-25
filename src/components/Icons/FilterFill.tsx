import * as React from "react";
import { SVGProps } from "react";

const SvgFilterFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 431q39 0 73.5-18t56.5-49.5 26-71-10-75-43.5-61-68-34-75.5 2-65.5 37T678 225H50v100h628q16 47 56.5 76.5T825 431zM175 569q-39 0-73.5 18T45 636.5t-26 71 10 75 43.5 61 68 34 75.5-2 65.5-37T322 775h628V675H322q-16-47-56.5-76.5T175 569z"
    />
  </svg>
);

export default SvgFilterFill;
