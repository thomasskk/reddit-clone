import * as React from "react";
import { SVGProps } from "react";

const SvgSpoiler = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M917 336 664 83q-45-45-104.5-60.5t-119 0T336 83L83 336q-45 45-60.5 104.5t0 119T83 664l254 253q44 45 103.5 60.5t119 0T664 917l253-253q45-45 60.5-104.5t0-119T917 336zm-44 283L619 873q-33 31-76 42t-86 0-76-42L127 619q-24-23-36.5-54T78 500t12.5-65 36.5-54l254-254q23-24 54-36.5T500 78t65 12.5 54 36.5l254 254q24 23 36.5 54t12.5 65-12.5 65-36.5 54zM473 774q-12-7-19.5-19t-7.5-26.5 7-27 19.5-19.5 27-7 27 7 19.5 19.5 7 27-7 26.5-19.5 19-27 7.5T473 774zm-6-166-10-336h86l-10 336h-66z"
    />
  </svg>
);

export default SvgSpoiler;
