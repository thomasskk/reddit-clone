import * as React from "react";
import { SVGProps } from "react";

const SvgCaretUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M728 647 500 419 272 647l-44-44 250-250q9-9 22-9t22 9l250 250z"
    />
  </svg>
);

export default SvgCaretUp;
