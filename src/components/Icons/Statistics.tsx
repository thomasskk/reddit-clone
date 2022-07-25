import * as React from "react";
import { SVGProps } from "react";

const SvgStatistics = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M94 500h62v300H94V500zm250-150h62v450h-62V350zm250-150h62v600h-62V200zM844 50h62v750h-62V50zM50 894h900v62H50v-62z"
    />
  </svg>
);

export default SvgStatistics;
