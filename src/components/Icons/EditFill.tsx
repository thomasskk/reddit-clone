import * as React from "react";
import { SVGProps } from "react";

const SvgEditFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M540 201 61 670q-17 17-17 41v189q0 23 16.5 39.5T100 956h190q23 0 40-17l469-479zm373-43-71-71q-25-24-58.5-33t-67-.5T657 86l-72 72 257 257 72-72q24-26 32.5-59.5t-.5-67-34-58.5h1z"
    />
  </svg>
);

export default SvgEditFill;
