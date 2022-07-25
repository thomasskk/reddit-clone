import * as React from "react";
import { SVGProps } from "react";

const SvgDownvoteFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M945 478q-7-16-21-25t-30-9H706V100q0-23-16.5-39.5T650 44H350q-23 0-39.5 16.5T294 100v344H106q-17 0-31 9t-20.5 24.5-4 32T64 538l394 437q17 19 42 19t42-19l394-437q11-12 13.5-28.5T945 478z"
    />
  </svg>
);

export default SvgDownvoteFill;
