import * as React from "react";
import { SVGProps } from "react";

const SvgBlock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M625 544H375q-90 0-167 45-75 44-119 119-45 77-45 167v25q0 23 16.5 39.5T100 956h800q23 0 39.5-16.5T956 900v-25q0-90-45-167-44-75-119-119-77-45-167-45zm269 350H106v-19q0-73 36.5-134.5t98-98T375 606h250q73 0 134.5 36.5t98 98T894 875v19zM500 481q63 0 116-31t84-84 31-116-31-116-84-84-116-31-116 31-84 84-31 116 31 116 84 84 116 31zm169-231q0 52-30 95L405 111q39-27 85.5-29.5t88 19.5 66 62 24.5 87zm-308-95 234 234q-50 35-110.5 29T381 369t-49-103.5T361 155z"
    />
  </svg>
);

export default SvgBlock;
