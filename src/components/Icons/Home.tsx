import * as React from "react";
import { SVGProps } from "react";

const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M877 420v474H637V694q0-37-18.5-68.5t-50-49.5-68.5-18-68.5 18-50 49.5T363 694v200H124V420l-63 42v442q0 21 15.5 36t36.5 14h278q14 0 24.5-10t10.5-25V694q0-31 22-53t53-21.5 53 22 22 53.5v226q0 15 10.5 25t24.5 10h278q21 1 36.5-14t15.5-36V462zm78-29L500 86 45 391l-35-50L468 32q14-10 32-10t33 10l457 307zM497 84zm7 0z"
    />
  </svg>
);

export default SvgHome;
