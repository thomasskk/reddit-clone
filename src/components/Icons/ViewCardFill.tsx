import * as React from "react";
import { SVGProps } from "react";

const SvgViewCardFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M100 45h800q23 0 39.5 16.5T956 101v299q0 23-16.5 39.5T900 456H100q-23 0-39.5-16.5T44 400V101q0-23 16.5-39.5T100 45zm0 499h800q23 0 39.5 16.5T956 600v297q0 23-16.5 39.5T900 953H100q-23 0-39.5-16.5T44 897V600q0-23 16.5-39.5T100 544z"
    />
  </svg>
);

export default SvgViewCardFill;
