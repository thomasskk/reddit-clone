import * as React from "react";
import { SVGProps } from "react";

const SvgTextPost = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 44H125q-34 0-57.5 23.5T44 125v750q0 34 23.5 57.5T125 956h750q34 0 57.5-23.5T956 875V125q0-34-23.5-57.5T875 44zm19 831q0 8-5.5 13.5T875 894H125q-8 0-13.5-5.5T106 875V125q0-8 5.5-13.5T125 106h750q8 0 13.5 5.5T894 125v750zM300 294h400v62H300v-62zm0 350h400v62H300v-62zm0-175h400v62H300v-62z"
    />
  </svg>
);

export default SvgTextPost;
