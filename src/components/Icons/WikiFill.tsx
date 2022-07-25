import * as React from "react";
import { SVGProps } from "react";

const SvgWikiFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M175 731h731V100q0-23-16.5-39.5T850 44H225q-36 0-66 17.5T111.5 109 94 175v582q36-26 81-26zm0 63q-34 0-57.5 23.5T94 875t23.5 57.5T175 956h675q23 0 39.5-16.5T906 900V794H175z"
    />
  </svg>
);

export default SvgWikiFill;
