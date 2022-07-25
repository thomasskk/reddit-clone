import * as React from "react";
import { SVGProps } from "react";

const SvgUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M928 722 500 294 72 722l-44-44 450-450q9-9 22-9t22 9l450 450z"
    />
  </svg>
);

export default SvgUp;
