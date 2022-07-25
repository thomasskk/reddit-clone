import * as React from "react";
import { SVGProps } from "react";

const SvgVideoFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M909 329q-17-37-47-63.5T794 227q-127-41-260-45l37-114 123 27q7 25 28.5 40.5t47.5 14 45.5-19.5 24-43.5T831 38 793.5 5 744 3t-40 30L579 6q-22-5-41 7t-25 33l-45 136q-134 4-262 45-38 12-68 38.5T91 329Q37 453 37 589t54 261q17 37 47 63.5t68 38.5q143 47 294 47t294-47q38-12 68-38.5t47-63.5q54-125 54-261t-54-261v1zm-54 498q-12 25-32.5 43T775 896q-134 44-275 44t-276-44q-26-8-46.5-26T145 827Q95 713 95 589t50-237q12-25 32.5-43t46.5-26q135-44 276-44t276 44q26 8 46.5 26t32.5 43q50 113 50 237t-50 238zm-479-14q-15 0-26-10.5T339 777V397q0-10 5-18.5t14-13 19-4.5 18 6l294 190q8 5 12.5 13t4.5 17.5-4.5 17.5-12.5 13L395 807q-9 6-20 6h1zm26-368v284l219-142z"
    />
  </svg>
);

export default SvgVideoFeed;
