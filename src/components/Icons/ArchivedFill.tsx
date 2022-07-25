import * as React from "react";
import { SVGProps } from "react";

const SvgArchivedFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M150 94h700q23 0 39.5 16.5T906 150v100q0 23-16.5 39.5T850 306H150q-23 0-39.5-16.5T94 250V150q0-23 16.5-39.5T150 94zm0 281q-6 12-6 25v450q0 23 16.5 39.5T200 906h600q23 0 39.5-16.5T856 850V400q0-13-6-25H150zm500 237H350v-75h300v75z"
    />
  </svg>
);

export default SvgArchivedFill;
