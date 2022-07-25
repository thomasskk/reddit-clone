import * as React from "react";
import { SVGProps } from "react";

const SvgAspectRatioFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M150 300H50V125q0-31 22-53t53-22h175v100H150v150zm150 650H125q-31 0-53-22t-22-53V700h100v150h150v100zm575 0H700V850h150V700h100v175q0 31-22 53t-53 22zm75-650H850V150H700V50h175q31 0 53 22t22 53v175z"
    />
  </svg>
);

export default SvgAspectRatioFill;
