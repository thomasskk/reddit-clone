import * as React from "react";
import { SVGProps } from "react";

const SvgAvatarStyleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M970 275 770 70q-15-15-40-15h-80q-22 0-36.5 12.5T595 100q-4 30-27 53t-53 27q-38 8-70.5-15.5T405 100q-4-20-18.5-32.5T350 55h-80q-25 0-40 15L30 275q-15 19-14 42t19 38l95 95q15 18 37.5 19t37.5-14l5-5v435q0 22 16.5 38.5T265 940h450q23 0 39-16.5t16-38.5V440l30 20q19 12 39.5 11t35.5-16l95-95q15-19 15-42.5T970 275z"
    />
  </svg>
);

export default SvgAvatarStyleFill;
