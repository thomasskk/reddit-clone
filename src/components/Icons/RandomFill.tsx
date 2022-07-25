import * as React from "react";
import { SVGProps } from "react";

const SvgRandomFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M620 45H115q-30 0-52.5 22.5T40 120v505q0 30 22.5 52.5T115 700h150V565q-19 19-45 19t-45-19-19-45 19-45 45-19 45 19v-80q2-40 21.5-73t52-52.5T410 250h45q-3-7-4-11.5t-1-13.5q0-27 17-46t43.5-19 45.5 17 19 43v5q0 10-1 14-1 8-4 11h125V115q0-30-22-50t-53-20zM220 285q-26 0-45.5-19.5T155 220t19.5-45.5T220 155t45.5 19.5T285 220q0 29-19 47t-46 18h4-4zm695 35H410q-31 0-53 21t-22 54v505q0 30 22.5 52.5T410 975h505q30 0 52.5-22.5T990 900V395q0-33-22-54t-53-21zM515 565q-26 0-45.5-19.5T450 500t19.5-45.5T515 435t45.5 19.5T580 500q0 26-19.5 45.5T515 565zm145 145q-26 0-45.5-19.5T595 645t19.5-45.5T660 580t45.5 19.5T725 645t-19.5 45.5T660 710h4-4zm150 145q-26 0-45.5-19.5T745 790t19.5-45.5T810 725t45.5 19.5T875 790q-4 27-22 46t-43 19z"
    />
  </svg>
);

export default SvgRandomFill;
