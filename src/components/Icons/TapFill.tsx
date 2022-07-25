import * as React from "react";
import { SVGProps } from "react";

const SvgTapFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M850 405q-28 0-53 14-9-20-25.5-35t-38-22-43.5-5-42 13q-8-20-23.5-35.5T589 311t-41.5-7.5T506 313V112q0-29-14-53t-38.5-38.5T400 6t-53.5 14.5T308 59t-14 53v431l-53-70q-26-34-68-41t-78 17.5T50 516t13 78l147 241q46 74 121.5 116.5T493 994l133-1q90 0 167-45 74-44 118-119 45-77 45-167V511q0-29-14.5-53T903 419.5 850 405zm-375 5zm300 101zM228 206q-18-38-18-81t18-81l-63-31q-25 53-25 112t25 112zm407 30q25-52 25-111T635 13l-63 30q18 39 18 82t-18 81z"
    />
  </svg>
);

export default SvgTapFill;
