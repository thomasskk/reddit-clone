import * as React from "react";
import { SVGProps } from "react";

const SvgBold = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M771 557q20 27 30.5 58.5T811 680q1 65-34.5 119.5T682 881q-66 30-140 29H230V105h246q76-2 146 26 58 23 95 73 34 48 34 106-1 52-24.5 98T663 485q65 20 108 72zM387 241v199h103q30 1 57-13 24-12 38.5-36t13.5-52q1-21-7-40t-24-32q-40-29-89-26h-92zm152 533q33 1 63-14 26-12 40.5-37.5T656 668q1-23-8.5-43.5T621 591q-42-30-93-28H387v211h152z"
    />
  </svg>
);

export default SvgBold;
