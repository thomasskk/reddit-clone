import * as React from "react";
import { SVGProps } from "react";

const SvgFormat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path fill="currentColor" d="M236 105h528v88H550v717H450V193H236v-88z" />
  </svg>
);

export default SvgFormat;
