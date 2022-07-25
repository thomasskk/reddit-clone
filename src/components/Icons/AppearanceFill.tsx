import * as React from "react";
import { SVGProps } from "react";

const SvgAppearanceFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m306 350-78 78q-15 14-22.5 33t-7.5 39 7.5 39 22.5 33l25 25L69 745q-30 24-42 60t-3.5 73 35 63.5 63.5 35 73-3.5 60-41l148-185 25 25q30 29 72 29t72-29l78-78zm663-31q-49-92-122.5-165.5T681 31q-16-9-34.5-6T615 41L350 306l344 344 265-265q13-13 16-31.5t-6-34.5z"
    />
  </svg>
);

export default SvgAppearanceFill;
