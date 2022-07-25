import * as React from "react";
import { SVGProps } from "react";

const SvgCrowdControlFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M900 744H798L595 113q-10-31-36.5-50T500 44t-58.5 19-36.5 50L202 744H100q-23 0-39.5 16.5T44 800v100q0 23 16.5 39.5T100 956h800q23 0 39.5-16.5T956 900V800q0-23-16.5-39.5T900 744zM392 356h215l29 88H364zM268 744l28-88h408l28 88H268z"
    />
  </svg>
);

export default SvgCrowdControlFill;
