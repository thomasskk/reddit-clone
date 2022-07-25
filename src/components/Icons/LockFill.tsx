import * as React from "react";
import { SVGProps } from "react";

const SvgLockFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 394h-25v-94q0-81-41-151-40-68-108-108Q581 0 500 0T349 41q-68 40-108 108-41 70-41 151v94h-25q-34 0-57.5 23.5T94 475v400q0 34 23.5 57.5T175 956h650q34 0 57.5-23.5T906 875V475q0-34-23.5-57.5T825 394zm-525-94q0-54 27-100t73-73 100-27 100 27 73 73 27 100v94H300v-94z"
    />
  </svg>
);

export default SvgLockFill;
