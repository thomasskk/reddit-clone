import * as React from "react";
import { SVGProps } from "react";

const SvgCsvFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M322 391V91H175q-34 0-57.5 23.5T94 172v219h228zm67 0h517V172q0-34-23.5-57.5T825 91H389v300zm-67 68H94v363q0 33 23.5 57t57.5 24h147V459zm67 0v444h436q34 0 57.5-24t23.5-57V459H389z"
    />
  </svg>
);

export default SvgCsvFill;
