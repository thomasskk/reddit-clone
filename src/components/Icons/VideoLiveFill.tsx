import * as React from "react";
import { SVGProps } from "react";

const SvgVideoLiveFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M250 186h450V86H250q-41 0-75.5 20.5T120 161t-20 75h100q0-21 14.5-35.5T250 186zm715 185q-17-16-40-16l-118 1q-16 0-30 9l-96 63v-67q0-23-16.5-39.5T625 305H75q-23 0-39.5 16.5T19 361v175q100 9 185 62 82 52 134 135 54 85 63 184h224q23 0 39.5-16.5T681 861v-67l96 63q14 9 30 9l118 1q23 0 39.5-16.5T981 811V411q0-23-16-40zM19 738v65q42 11 73 41.5t42 72.5h65q-13-68-62.5-117T19 738zm0-133v64q64 8 117.5 42.5t88.5 88T269 917h63q-9-81-52.5-149T168 657 19 605z"
    />
  </svg>
);

export default SvgVideoLiveFill;
