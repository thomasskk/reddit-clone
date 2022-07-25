import * as React from "react";
import { SVGProps } from "react";

const SvgTextPostFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 44H125q-34 0-57.5 23.5T44 125v750q0 34 23.5 57.5T125 956h750q34 0 57.5-23.5T956 875V125q0-34-23.5-57.5T875 44zM700 712H300v-75h400v75zm0-175H300v-75h400v75zm0-175H300v-75h400v75z"
    />
  </svg>
);

export default SvgTextPostFill;
