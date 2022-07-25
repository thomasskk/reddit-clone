import * as React from "react";
import { SVGProps } from "react";

const SvgRotate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M650 169H475l72-72-44-44-125 125q-9 9-9 22t9 22l125 125 44-44-72-72h175q46 0 84.5 23t61.5 61.5 23 84.5v100h62V400q0-63-31-116t-84-84-116-31zM497 678l-44 44 72 72H350q-46 0-84.5-23T204 709.5 181 625V525h-62v100q0 63 31 116t84 84 116 31h175l-72 72 44 44 125-125q9-9 9-22t-9-22z"
    />
  </svg>
);

export default SvgRotate;
