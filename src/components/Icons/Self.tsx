import * as React from "react";
import { SVGProps } from "react";

const SvgSelf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M625 544H375q-90 0-167 45-75 44-119 119-45 77-45 167v25q0 23 16.5 39.5T100 956h800q23 0 39.5-16.5T956 900v-25q0-90-45-167-44-75-119-119-77-45-167-45zm269 350H106v-19q0-73 36.5-134.5t98-98T375 606h250q73 0 134.5 36.5t98 98T894 875v19zM500 481q63 0 116-31t84-84 31-116-31-116-84-84-116-31-116 31-84 84-31 116 31 116 84 84 116 31zm0-400q46 0 84.5 23t61.5 61.5 23 84.5-23 84.5-61.5 61.5-84.5 23-84.5-23-61.5-61.5-23-84.5 23-84.5 61.5-61.5T500 81z"
    />
  </svg>
);

export default SvgSelf;
