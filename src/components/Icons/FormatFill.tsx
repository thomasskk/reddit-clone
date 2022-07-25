import * as React from "react";
import { SVGProps } from "react";

const SvgFormatFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path fill="currentColor" d="M216 105h568v159H591v646H409V264H216V105z" />
  </svg>
);

export default SvgFormatFill;
