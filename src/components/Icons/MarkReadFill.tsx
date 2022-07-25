import * as React from "react";
import { SVGProps } from "react";

const SvgMarkReadFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M916 209 617 33Q563 1 500 1T383 33L84 209q-19 11-29.5 29.5T44 279v546q0 34 23.5 57.5T125 906h750q34 0 57.5-23.5T956 825V279q0-22-10.5-40.5T916 209zM444 659l-19 1h-16l-14-12-96-97 53-52 73 73 224-224 53 53z"
    />
  </svg>
);

export default SvgMarkReadFill;
