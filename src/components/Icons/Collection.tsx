import * as React from "react";
import { SVGProps } from "react";

const SvgCollection = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M94 100h62v800H94V100zm200 0h62v800h-62V100zm200 0h62v800h-62V100zm102 42 58-24 306 740-58 24z"
    />
  </svg>
);

export default SvgCollection;
