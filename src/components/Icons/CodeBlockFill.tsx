import * as React from "react";
import { SVGProps } from "react";

const SvgCodeBlockFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M850 950H150q-41 0-70.5-29.5T50 850V550h100v300h700V150H500V50h350q41 0 70.5 29.5T950 150v700q0 41-29.5 70.5T850 950zM250 450q-61 0-111.5-33.5t-73.5-90-11-116T109 109q39-38 90-51t102 0 90 51l-70 70q-30-28-71-28t-70.5 29-29.5 70 29.5 70 70.5 29 71-28l70 70q-28 29-64.5 44T250 450z"
    />
  </svg>
);

export default SvgCodeBlockFill;
