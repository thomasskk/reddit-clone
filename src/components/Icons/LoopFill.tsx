import * as React from "react";
import { SVGProps } from "react";

const SvgLoopFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M288 975q-72 0-132-35.5T60.5 844 25 712.5 60.5 581t95.5-95.5T287 450h426q44 0 81-22t59-59 22-81.5-22-81.5-59-59-81.5-22-81.5 22-59 59-22 81v63H450v-63q0-71 35.5-131T581 60.5 712.5 25 844 60.5t95.5 95.5T975 287.5 939.5 419 844 514.5 712 550H288q-45 0-82 22t-59 59-22 81.5 22 81.5 59 59 81.5 22 81.5-22 59-59 22-81v-63h100v62q0 72-35.5 132T419 939.5 288 975z"
    />
  </svg>
);

export default SvgLoopFill;
