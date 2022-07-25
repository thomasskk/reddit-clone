import * as React from "react";
import { SVGProps } from "react";

const SvgBrowseFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M125 275q0-41 20-75.5t54.5-54.5 75.5-20h531q0-34-23.5-57.5T725 44H125q-34 0-57.5 23.5T44 125v600q0 34 23.5 57.5T125 806V275zm325 450q0-60 25-114t70-93 103-56 116.5-8.5 109 40.5 82.5 83V275q0-34-23.5-57.5T875 194H275q-34 0-57.5 23.5T194 275v600q0 34 23.5 57.5T275 956h302q-59-38-93-99.5T450 725zm535 190-88-89q28-47 28-101t-27-100-73-73-100-27-100 27-73 73-27 100 27 100 73 73 100 27 101-28l89 88zm-260-90q-41 0-70.5-29.5T625 725t29.5-70.5T725 625t70.5 29.5T825 725t-29.5 70.5T725 825z"
    />
  </svg>
);

export default SvgBrowseFill;
