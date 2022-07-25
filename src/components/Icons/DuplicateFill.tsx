import * as React from "react";
import { SVGProps } from "react";

const SvgDuplicateFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 50H375q-31 0-53 22t-22 53v500q0 31 22 53t53 22h500q31 0 53-22t22-53V125q0-31-22-53t-53-22zm-25 550H400V150h450v450zM600 850l-449-1V425h49V325h-74q-31 0-53 22t-22 53v474q0 31 22 53t53 22l499 1q31 0 53-22t22-53v-75H600v50z"
    />
  </svg>
);

export default SvgDuplicateFill;
