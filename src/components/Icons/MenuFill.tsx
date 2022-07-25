import * as React from "react";
import { SVGProps } from "react";

const SvgMenuFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M50 450h900v100H50V450zm100-325h700v100H150V125zm0 650h700v100H150V775z"
    />
  </svg>
);

export default SvgMenuFill;
