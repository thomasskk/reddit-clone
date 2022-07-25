import * as React from "react";
import { SVGProps } from "react";

const SvgArchived = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M850 94H150q-23 0-39.5 16.5T94 150v150q0 21 14.5 37t35.5 18v495q0 23 16.5 39.5T200 906h600q23 0 39.5-16.5T856 850V355q21-2 35.5-18t14.5-37V150q0-23-16.5-39.5T850 94zm-694 62h688v138H156V156zm50 688V356h588v488H206zm144-300h300v62H350v-62z"
    />
  </svg>
);

export default SvgArchived;
