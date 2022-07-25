import * as React from "react";
import { SVGProps } from "react";

const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m913 158-71-71q-25-24-58.5-33t-67-.5T657 86L61 670q-17 17-17 41v189q0 23 16.5 39.5T100 956h190q23 0 40-17l584-596q24-26 32.5-59.5t-.5-67-34-58.5h1zM290 894H106l-2-179 489-478 170 170zm579-595-62 64-169-170 63-62q20-19 48.5-19t48.5 20l70 70q20 20 20 48.5T869 299z"
    />
  </svg>
);

export default SvgEdit;
