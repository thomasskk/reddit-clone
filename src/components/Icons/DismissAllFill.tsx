import * as React from "react";
import { SVGProps } from "react";

const SvgDismissAllFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M150 450h700v100H150V450zm100-325h700v100H250V125zM50 775h700v100H50V775z"
    />
  </svg>
);

export default SvgDismissAllFill;
