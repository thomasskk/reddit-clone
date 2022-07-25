import * as React from "react";
import { SVGProps } from "react";

const SvgTextSizeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M100 450h100v300h100V450h100V350H100v100zm266-345v159h193v646h182V264h193V105H366z"
    />
  </svg>
);

export default SvgTextSizeFill;
