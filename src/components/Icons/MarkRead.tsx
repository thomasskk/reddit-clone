import * as React from "react";
import { SVGProps } from "react";

const SvgMarkRead = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M916 209 617 33Q563 1 500 1T383 33L84 209q-19 11-29.5 29.5T44 279v546q0 34 23.5 57.5T125 906h750q34 0 57.5-23.5T956 825V279q0-22-10.5-40.5T916 209zm-22 616q0 8-5.5 13.5T875 844H125q-8 0-13.5-5.5T106 825V279q0-11 9-17L414 87q40-24 86-24t86 24l299 175q9 6 9 17v546zM425 581l-78-78-44 44 96 97 13 10h13l17-1 255-256-44-44z"
    />
  </svg>
);

export default SvgMarkRead;
