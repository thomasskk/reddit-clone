import * as React from "react";
import { SVGProps } from "react";

const SvgCaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 656q-13 0-22-9L228 397l44-44 228 228 228-228 44 44-250 250q-9 9-22 9z"
    />
  </svg>
);

export default SvgCaretDown;
