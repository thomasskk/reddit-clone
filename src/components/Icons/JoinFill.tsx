import * as React from "react";
import { SVGProps } from "react";

const SvgJoinFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 20q-130 0-242 66-109 63-172 172-66 112-66 242t66 242q63 109 172 172 112 66 242 66t242-66q109-63 172-172 66-112 66-242t-66-242Q851 149 742 86 630 20 500 20zm210 520H535v175h-75V540H290v-80h175V290h75v175h175z"
    />
  </svg>
);

export default SvgJoinFill;
