import * as React from "react";
import { SVGProps } from "react";

const SvgSwipeUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M94 350h62V150l47 47 44-44L125 31 3 153l44 44 47-47v200zm756 55q-28 0-53 14-9-20-25.5-35t-38-22-43.5-5-42 13q-8-20-23.5-35.5T589 311t-41.5-7.5T506 313V112q0-29-14-53t-38.5-38.5T400 6t-53.5 14.5T308 59t-14 53v431l-53-70q-26-34-68-41t-78 17.5T50 516t13 78l147 241q46 74 121.5 116.5T493 994l133-1q90 0 167-45 74-44 118-119 45-77 45-167V511q0-29-14.5-53T903 419.5 850 405zm44 257q0 73-36 134.5t-97.5 98T626 931l-133 1q-70-1-131.5-35T264 803L117 562q-11-16-7.5-34t19-28.5 34-7T191 511l100 132q7 9 18 12.5t22 0 18-13 7-21.5V112q0-18 13-30.5T400 69t31 12.5 13 30.5v298h62q0-18 13-31t31.5-12.5 31 14T594 412v50h62q0-18 13-30.5t31-12.5 31 12.5 13 30.5v49h62q0-18 13-31t31-13 31 13 13 31v151z"
    />
  </svg>
);

export default SvgSwipeUp;
