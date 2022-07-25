import * as React from "react";
import { SVGProps } from "react";

const SvgCodeBlock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M826 902H175q-34 0-57.5-23.5T94 821V575h62v246q0 8 5.5 13.5T175 840h651q8 0 13.5-5.5T845 821V175q0-8-5.5-13.5T826 156H525V94h301q34 0 58 23.5t24 57.5v646q0 34-24 57.5T826 902zM250 431q-55 0-100.5-30.5t-66.5-81T72.5 215t49.5-93q35-34 81.5-45.5t93 0T378 122l-44 44q-23-22-53.5-29.5t-61 0T166 166q-17 17-26 38.5t-9 45.5 9 45.5 26 38.5q23 22 53.5 29.5t61 0T334 334l44 44q-25 26-58.5 39.5T250 431z"
    />
  </svg>
);

export default SvgCodeBlock;
