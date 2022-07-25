import * as React from "react";
import { SVGProps } from "react";

const SvgListNumbered = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M67 258h36V142q-16 8-35 9v-38q21 1 37-13h52v158h32v42H67v-42zM54 589q0-26 9-43 13-24 49-46l6-3q21-13 26-18 7-7 7-18 0-17-20-17-13 2-24 9.5T90 474l-36-26q11-22 32.5-35t45.5-13q34 0 51.5 16t17.5 44q0 19-9 33-12 18-40 33-31 17-36 32h86v42H54v-11zm-4 271 32-27q6 11 17.5 17.5T124 858q29 0 29-21 0-13-9-18t-29-5H99v-36h17q18 0 25.5-5t7.5-14q0-16-20-16-27 0-45 19l-27-32q15-14 34.5-22t41.5-8q32 0 49.5 14t17.5 39q1 14-7 25t-22 15q16 4 26 16.5t9 28.5q0 30-21 46t-57 16q-23 1-44-9.5T50 860zm300-391h600v62H350v-62zm0 300h600v62H350v-62zm0-600h600v62H350v-62z"
    />
  </svg>
);

export default SvgListNumbered;
