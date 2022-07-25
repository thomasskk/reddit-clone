import * as React from "react";
import { SVGProps } from "react";

const SvgRisingFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M920 194H587q-11 0-20 6t-13.5 16-2 21 9.5 19l70 69-106 106-93-93q-23-24-57-24t-58 24L21 635Q4 651 4 674.5T21 715l114 114q17 17 40 17t40-17l160-160 93 93q23 24 57 24t58-24l242-243 69 69q8 8 19 10.5t21-2 16-13.5 6-20V230q0-15-10.5-25.5T920 194z"
    />
  </svg>
);

export default SvgRisingFill;
