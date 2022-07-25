import * as React from "react";
import { SVGProps } from "react";

const SvgCollectionFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M50 100h100v800H50V100zm200 0h100v800H250V100zm200 0h100v800H450V100zm129 50 92-39 306 739-92 39z"
    />
  </svg>
);

export default SvgCollectionFill;
