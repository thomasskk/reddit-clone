import * as React from "react";
import { SVGProps } from "react";

const SvgStrikethrough = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M415 400q0-1-2-2l-3-1q-22-17-33.5-42.5T366 301q-1-34 17-61.5t48-41 63.5-13.5 63.5 14q28 13 50 35 18 18 31 41l87-35q-29-64-87-102-67-44-146-41-61-2-117 25-49 24-78 71-29 49-28 107-1 53 25 100h120zm535 69H50v62h423l2 1q51 18 84 33 36 18 63 48 16 16 24 37t8 44q0 38-21 69.5T577.5 812t-74 17-74-17.5-58-48T336 697l-91 38q17 51 54 90 39 43 92 68 54 26 115 25 64 1 120.5-28t90.5-82 33-117q1-33-9-65t-31-58q-16-20-36-37h276v-62z"
    />
  </svg>
);

export default SvgStrikethrough;
