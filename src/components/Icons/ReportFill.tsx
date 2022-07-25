import * as React from "react";
import { SVGProps } from "react";

const SvgReportFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m939 102-19-9-15 7q-93 44-196 43T514 97Q407 44 287.5 44T61 97l-17 8v895h106V728q83-27 170.5-20.5T486 753q107 53 226.5 53T939 753l17-8V133q0-10-4.5-18T939 102z"
    />
  </svg>
);

export default SvgReportFill;
