import * as React from "react";
import { SVGProps } from "react";

const SvgSaveFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M800 44H200q-23 0-39.5 16.5T144 100v830q0 16 7.5 29t21 20.5 28.5 7 28-8.5l271-166 271 166q13 8 28 8.5t28.5-7 21-20.5 7.5-29V100q0-23-16.5-39.5T800 44z"
    />
  </svg>
);

export default SvgSaveFill;
