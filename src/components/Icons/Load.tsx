import * as React from "react";
import { SVGProps } from "react";

const SvgLoad = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M50 469h200v62H50v-62zm700 0h200v62H750v-62zM469 50h62v200h-62V50zm0 700h62v200h-62V750zM95 698l173-100 31 54-173 100zm606-350 173-100 31 54-173 100zM248 126l54-31 100 173-54 31zm350 606 54-31 100 173-54 31zm103-80 31-54 173 100-31 54zM95 302l31-54 173 100-31 54zm153 572 100-173 54 31-100 173zm350-606L698 95l54 31-100 173z"
    />
  </svg>
);

export default SvgLoad;
