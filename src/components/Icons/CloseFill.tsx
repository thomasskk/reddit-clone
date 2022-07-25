import * as React from "react";
import { SVGProps } from "react";

const SvgCloseFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m935 135-70-70-365 364L135 65l-70 70 364 365L65 865l70 70 365-364 365 364 70-70-364-365z"
    />
  </svg>
);

export default SvgCloseFill;
