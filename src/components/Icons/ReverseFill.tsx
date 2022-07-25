import * as React from "react";
import { SVGProps } from "react";

const SvgReverseFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M600 125H281V50q0-9-5-16.5T263 22t-17-3-16 7L80 151q-11 9-11 24t11 24l150 125q9 7 20 7 7 0 14-3.5t12-11 5-16.5v-75h319q75 0 138 37t100 100 37 138-37 138-100 100-138 37H100v100h500q102 0 189-51 85-50 135-135 51-87 51-189t-51-189q-50-85-135-135-87-51-189-51z"
    />
  </svg>
);

export default SvgReverseFill;
