import * as React from "react";
import { SVGProps } from "react";

const SvgAudioFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 475H775q0 75-37 138T638 713t-138 37-138-37-100-100-37-138H125q0 93 43 174 42 80 115 132 75 53 167 65v54h-71v100h242V900h-71v-54q92-12 167-65 73-52 115-132 43-81 43-174zM500 650q48 0 88-23.5t63.5-63.5 23.5-88V225q0-48-23.5-88T588 73.5 500 50t-88 23.5-63.5 63.5-23.5 88v250q0 48 23.5 88t63.5 63.5 88 23.5z"
    />
  </svg>
);

export default SvgAudioFill;
