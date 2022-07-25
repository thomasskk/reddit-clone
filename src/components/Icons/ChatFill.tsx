import * as React from "react";
import { SVGProps } from "react";

const SvgChatFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M840 160Q746 66 621 33 500 1 379 33 254 66 160 160q-53 53-88.5 122T25 425q-11 79 3.5 161T80 735L20 930q-4 15 3 28t22 17h20l200-55q105 60 235 60 50 0 80-5 128-22 228-105 98-80 144-197 48-120 28-248-15-75-51.5-144T840 160zM300 560q-25 0-42.5-18.5T240 500t17.5-41.5 43-18.5 42.5 17 17 43-17 43-43 17zm200 0q-25 0-42.5-18.5T440 500t17.5-41.5T500 440t42.5 18.5T560 500q0 26-17 43t-43 17zm200 0q-25 0-42.5-18.5T640 500t19-41.5 41.5-18.5 41 18.5T760 500q0 26-17 43t-43 17z"
    />
  </svg>
);

export default SvgChatFill;
