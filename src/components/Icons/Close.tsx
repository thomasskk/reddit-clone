import * as React from "react";
import { SVGProps } from "react";

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m922 122-44-44-378 378L122 78l-44 44 378 378L78 878l44 44 378-378 378 378 44-44-378-378z"
    />
  </svg>
);

export default SvgClose;
