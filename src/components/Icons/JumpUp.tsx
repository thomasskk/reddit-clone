import * as React from "react";
import { SVGProps } from "react";

const SvgJumpUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M878 522 500 144 122 522l-44-44L478 78q9-9 22-9t22 9l400 400zm0 350L500 494 122 872l-44-44 400-400q9-9 22-9t22 9l400 400z"
    />
  </svg>
);

export default SvgJumpUp;
