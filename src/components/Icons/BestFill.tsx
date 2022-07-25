import * as React from "react";
import { SVGProps } from "react";

const SvgBestFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M350 925h300v75H350v-75zm525-426v357h25q23 0 39.5-16.5T956 800V650q0-46-21.5-86T875 499zM513 22l-13-6-13 6q-88 40-154.5 109.5T230 290.5 194 477v379h612V477q0-97-36-186.5t-102.5-159T513 22zm-13 509q-36 0-66-17.5T386.5 466 369 400t17.5-66 47.5-47.5 66-17.5 66 17.5 47.5 47.5 17.5 66-17.5 66-47.5 47.5-66 17.5zm-375-32q-38 25-59.5 65T44 650v150q0 23 16.5 39.5T100 856h25V499z"
    />
  </svg>
);

export default SvgBestFill;
