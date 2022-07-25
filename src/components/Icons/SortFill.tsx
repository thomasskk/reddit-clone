import * as React from "react";
import { SVGProps } from "react";

const SvgSortFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M50 450h600v100H50V450zm0-350h900v100H50V100zm0 700h300v100H50V800z"
    />
  </svg>
);

export default SvgSortFill;
