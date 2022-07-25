import * as React from "react";
import { SVGProps } from "react";

const SvgStatisticsFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M50 500h100v250H50V500zm250-150h100v400H300V350zm250-150h100v550H550V200zM800 50h100v700H800V50zM0 850h950v100H0V850z"
    />
  </svg>
);

export default SvgStatisticsFill;
