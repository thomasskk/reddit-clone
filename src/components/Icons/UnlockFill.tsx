import * as React from "react";
import { SVGProps } from "react";

const SvgUnlockFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 394H300v-94q0-40 15-76.5t44-64.5q39-38 90-51t102 0 90 51q19 18 31 41h111q-24-68-75.5-116.5T588 14 449 5 321.5 59.5t-89 105.5T200 300v94h-25q-34 0-57.5 23.5T94 475v400q0 34 23.5 57.5T175 956h650q34 0 57.5-23.5T906 875V475q0-34-23.5-57.5T825 394z"
    />
  </svg>
);

export default SvgUnlockFill;
