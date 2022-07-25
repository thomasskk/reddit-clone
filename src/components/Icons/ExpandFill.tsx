import * as React from "react";
import { SVGProps } from "react";

const SvgExpandFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M372 122q7-7 9-16t-2-18-12-14-17-5H100q-13 0-22 9t-9 22v250q0 9 5 17t14 12q6 2 12 2 13 0 22-9l90-90 153 153 70-70-153-153zm540 499q-9-3-18-1.5t-16 8.5l-90 90-153-153-70 70 153 153-90 90q-7 7-9 16t2 18 12 14 17 5h250q13 0 22-9t9-22V650q0-9-5-17t-14-12z"
    />
  </svg>
);

export default SvgExpandFill;
