import * as React from "react";
import { SVGProps } from "react";

const SvgUnmodFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M638 585q24-39 24-84t-21.5-82.5-59-59T499 338t-84 24zM362 415q-24 39-24 84t21.5 82.5 59 59T501 662t84-24zm552-295L514 21q-14-4-28 0L86 120q-18 5-30 20t-12 34v426q0 119 98 216 73 73 196 128 74 34 147 54 7 2 15 2t15-2q73-20 147-53 123-56 196-129 98-97 98-216V174q0-19-12-34t-30-20zM500 737q-65 1-119.5-31t-86-86.5T263 500t31.5-119.5 86-86.5T500 262t119.5 32 86.5 86.5 31.5 119-32 119.5-86.5 86.5T500 737z"
    />
  </svg>
);

export default SvgUnmodFill;
