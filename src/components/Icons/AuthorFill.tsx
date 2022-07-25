import * as React from "react";
import { SVGProps } from "react";

const SvgAuthorFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M750 19q-53 0-100 23t-80 63.5-45 92.5q23 9 41 27l209 209q18 18 27 41 56-13 99-50.5t64-90.5 14.5-110.5-39-104.5T858 45.5 750 19zm-23 464L517 273q-18-18-43.5-16T432 279L42 800q-19 25-22 57t11.5 60.5 42 45.5 59.5 17q37 0 67-22l521-390q20-16 22-41.5T727 483zM451 601l-52-53 99-100 54 54z"
    />
  </svg>
);

export default SvgAuthorFill;
