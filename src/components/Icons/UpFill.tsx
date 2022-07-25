import * as React from "react";
import { SVGProps } from "react";

const SvgUpFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M915 735 500 321 85 735l-70-70 450-450q14-15 35-15t35 15l450 450z"
    />
  </svg>
);

export default SvgUpFill;
