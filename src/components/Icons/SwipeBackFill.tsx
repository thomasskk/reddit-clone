import * as React from "react";
import { SVGProps } from "react";

const SvgSwipeBackFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M250 94Q126 94 4 119l13 62q115-25 233-25V94zm625 311q-28 0-53 14-9-20-25.5-35t-38-22-43.5-5-42 13q-8-20-23.5-35.5T614 311t-41.5-7.5T531 313V112q0-29-14-53t-38.5-38.5T425 6t-53.5 14.5T333 59t-14 53v431l-53-70q-26-34-68-41t-78 17.5T75 516t13 78l147 241q46 74 121.5 116.5T518 994l133-1q90 0 167-45 74-44 118-119 45-77 45-167V511q0-29-14.5-53T928 419.5 875 405zm-375 5zm300 101z"
    />
  </svg>
);

export default SvgSwipeBackFill;
