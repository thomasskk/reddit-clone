import * as React from "react";
import { SVGProps } from "react";

const SvgViewClassicFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M100 394h800q23 0 39.5 16.5T956 450v100q0 23-16.5 39.5T900 606H100q-23 0-39.5-16.5T44 550V450q0-23 16.5-39.5T100 394zm0-300h800q23 0 39.5 16.5T956 150v100q0 23-16.5 39.5T900 306H100q-23 0-39.5-16.5T44 250V150q0-23 16.5-39.5T100 94zm0 600h800q23 0 39.5 16.5T956 750v100q0 23-16.5 39.5T900 906H100q-23 0-39.5-16.5T44 850V750q0-23 16.5-39.5T100 694z"
    />
  </svg>
);

export default SvgViewClassicFill;
