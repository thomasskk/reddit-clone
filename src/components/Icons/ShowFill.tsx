import * as React from "react";
import { SVGProps } from "react";

const SvgShowFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1018 1000" {...props}>
    <path
      fill="currentColor"
      d="M993 479q-40-100-114.5-176T706 185.5 500 144t-206 41.5T121.5 303 7 479q-9 21 0 42 41 104 121 183 98 96 229 133 128 35 258 7 133-30 236-121 95-84 142-202 9-21 0-42zM500 700q-54 0-100-27t-73-73-27-100 27-100 73-73 100-27 100 27 73 73 27 100-27 100-73 73-100 27z"
    />
  </svg>
);

export default SvgShowFill;
