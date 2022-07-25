import * as React from "react";
import { SVGProps } from "react";

const SvgAddFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M950 450H550V50H450v400H50v100h400v400h100V550h400V450z"
    />
  </svg>
);

export default SvgAddFill;
