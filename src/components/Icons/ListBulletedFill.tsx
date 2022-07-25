import * as React from "react";
import { SVGProps } from "react";

const SvgListBulletedFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M350 450h600v100H350V450zm0-300h600v100H350V150zm0 600h600v100H350V750zM50 200q0 41 29.5 70.5T150 300t70.5-29.5T250 200t-29.5-70.5T150 100t-70.5 29.5T50 200zm0 300q0 41 29.5 70.5T150 600t70.5-29.5T250 500t-29.5-70.5T150 400t-70.5 29.5T50 500zm0 300q0 41 29.5 70.5T150 900t70.5-29.5T250 800t-29.5-70.5T150 700t-70.5 29.5T50 800z"
    />
  </svg>
);

export default SvgListBulletedFill;
