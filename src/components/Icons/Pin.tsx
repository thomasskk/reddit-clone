import * as React from "react";
import { SVGProps } from "react";

const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M954 360 640 46q-16-17-39.5-17T561 46l-33 32q-23 23-28.5 56t10.5 63L326 380q-30-15-62.5-10T207 399l-32 32q-16 16-16 39.5t16 39.5l135 136L28 928l44 44 282-282 136 135q16 16 39.5 16t39.5-16l32-32q24-24 29-56.5T620 674l183-183q30 15 63 9.5t56-28.5l32-32q17-17 17-40t-17-40zm-76 68q-12 11-28 11t-28-11l-22-22-265 265 22 22q12 11 12 27.5T557 749l-28 28-305-306 27-28q12-11 28-11t28 11l22 22 265-265-22-22q-11-12-11-28t11-28l28-28 306 306z"
    />
  </svg>
);

export default SvgPin;
