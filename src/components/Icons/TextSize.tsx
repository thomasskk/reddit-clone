import * as React from "react";
import { SVGProps } from "react";

const SvgTextSize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M150 406h91v294h62V406h97v-62H150v62zm236-301v88h214v717h100V193h214v-88H386z"
    />
  </svg>
);

export default SvgTextSize;
