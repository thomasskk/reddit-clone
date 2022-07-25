import * as React from "react";
import { SVGProps } from "react";

const SvgBack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M950 469H125L522 72l-44-44L28 478q-9 9-9 22t9 22l450 450 44-44-397-397h825v-62z"
    />
  </svg>
);

export default SvgBack;
