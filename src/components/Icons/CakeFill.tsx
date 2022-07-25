import * as React from "react";
import { SVGProps } from "react";

const SvgCakeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M550 344q32 0 59.5-16t43.5-43.5 16-59.5q0-35-27-71-21-28-54-51-28-20-40-22-11 3-37 22-32 24-53 51-27 36-27 71 0 32 16 59.5t43.5 43.5 59.5 16zM250 762v-75h706v-75H250v-75h706v-85q0-20-10-38.5T918 384L727 263q-10 45-39 79t-70.5 51-87 12.5-82.5-30-58-65-21-85.5q2-40 19.5-76.5T436 85q-21-5-41.5.5T359 105L70 390q-24 24-24 58v375q0 34 23.5 57.5T127 904l748 2q34 0 57.5-23.5T956 825v-63H250z"
    />
  </svg>
);

export default SvgCakeFill;
