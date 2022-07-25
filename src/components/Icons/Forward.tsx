import * as React from "react";
import { SVGProps } from "react";

const SvgForward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M972 478 522 28l-44 44 397 397H50v62h825L478 928l44 44 450-450q9-9 9-22t-9-22z"
    />
  </svg>
);

export default SvgForward;
