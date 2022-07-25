import * as React from "react";
import { SVGProps } from "react";

const SvgReply = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1127 1000" {...props}>
    <path
      fill="currentColor"
      d="M765 404H177l299-298-52-52L62 415q-11 11-11 26t11 26l362 362 52-52-299-299h588q70 0 129 34.5t93.5 93.5 34.5 129v265h74V735q0-90-46-167-44-74-118-118-77-46-167-46z"
    />
  </svg>
);

export default SvgReply;
