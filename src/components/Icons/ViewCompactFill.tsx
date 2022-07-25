import * as React from "react";
import { SVGProps } from "react";

const SvgViewCompactFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M94 144h812v112H94V144zm0 200h812v112H94V344zm0 200h812v112H94V544zm0 200h812v112H94V744z"
    />
  </svg>
);

export default SvgViewCompactFill;
