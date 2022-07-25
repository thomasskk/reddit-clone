import * as React from "react";
import { SVGProps } from "react";

const SvgMicMuteFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M675 475V225q0-42-18.5-79T605 84.5t-74-32-80.5 4.5-70 40.5T336 165l336 336q3-13 3-26zm100 0q0 56-22 107l75 74q47-84 47-181H775zM117 205l208 208v62q0 48 23.5 88t63.5 63.5 88 23.5q27 0 53-9l76 76q-60 33-129 33-75 0-138-37T262 613t-37-138H125q0 93 43 174 42 80 115 132 75 53 167 65v54h-71v100h242V900h-71v-54q82-11 151-57l53 52 70-70-636-637z"
    />
  </svg>
);

export default SvgMicMuteFill;
