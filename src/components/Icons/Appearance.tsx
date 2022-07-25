import * as React from "react";
import { SVGProps } from "react";

const SvgAppearance = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M969 319q-49-92-122.5-165.5T681 31q-16-9-34.5-6T615 41L228 428q-14 14-22 33t-8 39 8 38.5 22 33.5l25 25L69 745q-30 24-42 60t-3.5 73 35 63.5 63.5 35 73-3.5 60-41l148-185 25 25q30 29 72 29t72-29l387-387q13-13 16-31.5t-6-34.5zM528 728q-12 12-28 12t-28-12l-75-75-191 239q-13 16-32 22.5t-38.5 2T102 898t-18.5-33.5 2-38.5 22.5-32l239-191-75-75q-12-12-12-28t12-28l78-78 256 256zm122-122L394 350 656 88q81 44 146.5 109.5T912 344z"
    />
  </svg>
);

export default SvgAppearance;
