import * as React from "react";
import { SVGProps } from "react";

const SvgCrosspostFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M806 587q-8-8-19-10.5t-21 2-16 13.5-6 20v88H575q-54 0-100-27t-73-73-27-100 27-100 73-73 100-27h169v88q0 11 6 20t16 13q7 3 14 3 15 0 26-11l138-139q10-11 10-26t-11-25L806 86q-8-7-19-9.5t-21 2T750 92t-6 20v88H575q-72 0-135.5 32.5t-106 89.5T279 450H50v100h229q12 71 54.5 128t106 89.5T575 800h169v88q0 11 6 20t16 13q7 3 14 3 15 0 25-10l138-137q11-10 11-25t-10-26z"
    />
  </svg>
);

export default SvgCrosspostFill;
