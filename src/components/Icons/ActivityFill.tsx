import * as React from "react";
import { SVGProps } from "react";

const SvgActivityFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M870 465q-11-22-29-33.5T800 420H580V80q0-23-16-39t-39-16q-27 0-40 20L140 450q-19 27-17 57.5t27 52.5q15 10 23 14 14 6 27 6h220v340q0 23 16.5 39t38.5 16q27 0 40-20l340-405q19-19 22.5-40.5T870 465z"
    />
  </svg>
);

export default SvgActivityFill;
