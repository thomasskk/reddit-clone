import * as React from "react";
import { SVGProps } from "react";

const SvgViewCompact = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M100 91h800v62H100V91zm0 254h800v63H100v-63zm0 249h800v62H100v-62zm0 245h800v63H100v-63z"
    />
  </svg>
);

export default SvgViewCompact;
