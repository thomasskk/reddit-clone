import * as React from "react";
import { SVGProps } from "react";

const SvgUpvotes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1012 1000" {...props}>
    <path
      fill="currentColor"
      d="M456 427v-21h18l53-62H394v155zm86-101 41-48L368 27Q351 8 325.5 8T282 27L19 334q-8 10-10 22.5t3.5 24 16 18.5 23.5 7h142v194q0 23 16.5 39.5T250 656h9l54-62h-57V344H93L325 73zm439 308L718 327q-17-19-42.5-19T632 327L369 634q-8 10-10 22.5t3.5 24 16 18.5 23.5 7h142v194q0 23 16.5 39.5T600 956h150q23 0 39.5-16.5T806 900V706h142q13 0 23.5-7t16-18.5 3.5-24-10-22.5zm-237 10v250H606V644H443l232-271 232 271H744z"
    />
  </svg>
);

export default SvgUpvotes;
