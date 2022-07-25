import * as React from "react";
import { SVGProps } from "react";

const SvgDiscover = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M979 303 829 43q-11-20-33.5-26T753 23L257 309q-17 10-24 29t0 37L41 486q-20 12-26 34.5t6 42.5l101 176q8 13 21 20.5t28 7.5 28-8l191-110q11 17 31 23 7 2 14 2 15 0 28-8l496-286q20-12 26-34.5t-6-42.5zM173 702 76 538l186-107 96 165zm265-93-22-37-102-178q-3-4-7-7l-15-26L778 80l144 249zm22 174L281 962l44 45 175-175 175 175 44-45-179-179q-17-16-40-16t-40 16z"
    />
  </svg>
);

export default SvgDiscover;
