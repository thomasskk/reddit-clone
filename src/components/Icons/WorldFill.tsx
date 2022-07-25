import * as React from "react";
import { SVGProps } from "react";

const SvgWorldFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M82 262q-53 94-61 201h958q-8-107-61-200zm897 275H21q8 107 61 200h836q53-93 61-199v-1zM135 812q68 81 164 125t201.5 44 201-44T866 813zm730-625q-68-80-164-124T500 19 299 63 135 188z"
    />
  </svg>
);

export default SvgWorldFill;
