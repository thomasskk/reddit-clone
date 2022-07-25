import * as React from "react";
import { SVGProps } from "react";

const SvgSwapCameraFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M943 186q-19-19-43-29t-50-10H741l-58-80q-8-11-20-17t-26-6H363q-14 0-26 6t-20 17l-58 80H150q-36 0-66 17.5t-47.5 48T19 278v497q0 36 17.5 66T84 888.5t66 17.5h698q36 0 66-17.5t47.5-47.5 18.5-66l1-496q0-27-10-51t-28-42zM405 451v-74q-30 13-51 38t-28 57 1.5 63.5T359 590l-46 43q-35-37-47-87t2-99.5 50.5-85.5 86.5-49v-92q0-9 5.5-17t14-11.5 18-2T458 198l114 114q9 10 9 23.5t-9 24.5L459 474q-7 6-16.5 8t-18-1.5-14-11.5-5.5-18zm190 237v92q0 9-5.5 17t-14 12-18 2-15.5-9L428 688q-9-10-9-23.5t9-24.5l114-114q6-6 15.5-8t18 1.5 14 11.5 5.5 18v74q30-13 51-38t28-57-2-63.5-31-54.5l46-43q35 37 47 87t-2 99.5-51 85.5-86 49z"
    />
  </svg>
);

export default SvgSwapCameraFill;
