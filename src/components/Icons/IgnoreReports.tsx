import * as React from "react";
import { SVGProps } from "react";

const SvgIgnoreReports = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M931 117q-11-8-25-9.5t-27 3.5q-88 36-183.5 32.5T514 97q-99-49-209.5-53T92 83q-22 9-35.5 29.5T44 157v843h62V745q91-40 191-38t189 46q103 52 218 54t220-46q15-7 23.5-21t8.5-31V164q0-14-6.5-26.5T931 117zm-37 588q-91 41-191 39t-189-47q-96-47-202-52.5T106 677V157q0-11 10-17 90-37 186.5-33.5T486 153q95 48 201.5 53T893 173zM500 219q-56 0-103.5 27.5t-75 75T294 425t27.5 103.5 75 75T500 631t103.5-27.5 75-75T706 425t-27.5-103.5-75-75T500 219zm144 206q0 42-23 77L423 304q33-21 72.5-22.5t74 17.5 54.5 53 20 73zm-288 0q0-42 23-77l198 198q-33 21-72.5 22.5t-74-17.5-54.5-53-20-73z"
    />
  </svg>
);

export default SvgIgnoreReports;
