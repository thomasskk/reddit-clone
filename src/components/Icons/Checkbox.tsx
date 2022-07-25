import * as React from "react";
import { SVGProps } from "react";

const SvgCheckbox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 94H175q-34 0-57.5 23.5T94 175v650q0 34 23.5 57.5T175 906h650q34 0 57.5-23.5T906 825V175q0-34-23.5-57.5T825 94zm19 731q0 8-5.5 13.5T825 844H175q-8 0-13.5-5.5T156 825V175q0-8 5.5-13.5T175 156h650q8 0 13.5 5.5T844 175v650z"
    />
  </svg>
);

export default SvgCheckbox;
