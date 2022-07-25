import * as React from "react";
import { SVGProps } from "react";

const SvgDeleteFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M161 837q2 33 20.5 60.5t47.5 43 62 15.5h418q33 0 62-15.5t47.5-43T839 836l37-486H124zm539-662q0-41-20-75.5T625.5 45 550 25H450q-41 0-75.5 20T320 99.5 300 175H100v100h800V175H700zm-300 0q0-21 14.5-35.5T450 125h100q21 0 35.5 14.5T600 175H400z"
    />
  </svg>
);

export default SvgDeleteFill;
