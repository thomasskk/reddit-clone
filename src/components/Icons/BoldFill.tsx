import * as React from "react";
import { SVGProps } from "react";

const SvgBoldFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M784 554q21 26 31 57.5t9 64.5q1 66-34.5 121T695 880q-66 31-139 30H220V105h265q78-2 150 28 58 23 95 74 33 47 32 104 0 51-23 96.5T677 484q64 20 107 70zM397 260v174h102q18 2 35.5-4.5T565 410t19.5-30 4.5-35q2-18-5.5-35T562 282q-34-24-75-22h-90zm151 495q41 1 72-26 14-13 21-30.5t7-37-8-37-23-29.5q-35-27-79-25H397v185h151z"
    />
  </svg>
);

export default SvgBoldFill;
