import * as React from "react";
import { SVGProps } from "react";

const SvgUnlock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 394H306v-85q-1-53 24.5-99.5t70.5-74 99-29.5q50 1 93.5 26t69.5 68h70q-30-70-93.5-112.5T500 44q-71 1-130 37.5t-93 97T244 309v85h-69q-34 0-57.5 23.5T94 475v400q0 34 23.5 57.5T175 956h650q34 0 57.5-23.5T906 875V475q0-34-23.5-57.5T825 394zm19 481q0 8-5.5 13.5T825 894H175q-8 0-13.5-5.5T156 875V475q0-8 5.5-13.5T175 456h650q8 0 13.5 5.5T844 475v400z"
    />
  </svg>
);

export default SvgUnlock;
