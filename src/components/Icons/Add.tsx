import * as React from "react";
import { SVGProps } from "react";

const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M950 470H530V50h-60v420H50v60h420v420h60V530h420v-60z"
    />
  </svg>
);

export default SvgAdd;
