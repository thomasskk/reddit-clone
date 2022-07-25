import * as React from "react";
import { SVGProps } from "react";

const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M947 353 640 46l-44 44 254 254H700q-133 0-255 52-118 49-209 140T96 745q-52 122-52 255h62q0-121 47-231 45-107 127-189t189-127q110-47 231-47h150L596 660l44 44 307-307q9-9 9-22t-9-22z"
    />
  </svg>
);

export default SvgShare;
