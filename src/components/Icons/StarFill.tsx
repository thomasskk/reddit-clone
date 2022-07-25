import * as React from "react";
import { SVGProps } from "react";

const SvgStarFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M979 369q-4-15-15.5-25T937 331l-260-50L549 49q-8-12-21-19.5T500 22t-28 7.5T451 49L323 280 64 330q-16 3-27.5 13.5t-16 25T19 398t14 26l180 193-32 263q-2 15 4 29t18.5 23 28 10.5T261 937l239-111 239 111q14 7 29.5 5.5t28-10.5 18.5-23 4-29l-32-263 180-193q10-11 13.5-26t-1.5-29z"
    />
  </svg>
);

export default SvgStarFill;
