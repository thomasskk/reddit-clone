import * as React from "react";
import { SVGProps } from "react";

const SvgBlockFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M625 544H375q-90 0-167 45-75 44-119 119-45 77-45 167v25q0 23 16.5 39.5T100 956h800q23 0 39.5-16.5T956 900v-25q0-90-45-167-44-75-119-119-77-45-167-45zm-125-44q68 0 125.5-33.5t91-91T750 250t-33.5-125.5-91-91T500 0 374.5 33.5t-91 91T250 250t33.5 125.5 91 91T500 500zM350 250q0-34 15-64l199 199q-30 15-64 15-41 0-75.5-20T370 325.5 350 250zm300 0q0 34-15 64L436 115q30-15 64-15 41 0 75.5 20t54.5 54.5 20 75.5z"
    />
  </svg>
);

export default SvgBlockFill;
