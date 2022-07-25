import * as React from "react";
import { SVGProps } from "react";

const SvgSelfFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M269 250q0 63 31 116t84 84 116 31 116-31 84-84 31-116-31-116-84-84-116-31-116 31-84 84-31 116zm356 294H375q-90 0-167 45-75 44-119 119-45 77-45 167v25q0 23 16.5 39.5T100 956h800q23 0 39.5-16.5T956 900v-25q0-90-45-167-44-75-119-119-77-45-167-45z"
    />
  </svg>
);

export default SvgSelfFill;
