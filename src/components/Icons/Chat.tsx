import * as React from "react";
import { SVGProps } from "react";

const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M840 160Q746 66 621 33 500 1 379 33 254 66 160 160q-53 53-88.5 122T25 425q-11 79 3.5 161T80 735L20 930q-4 15 3 28t22 17h20l200-55q105 60 235 60 50 0 80-5 128-22 228-105 98-80 144-197 48-120 28-248-15-75-51.5-144T840 160zm75 410q-15 87-63.5 160T730 851.5 570 915q-71 11-143.5-3T290 860l-10-5-180 50 50-175-5-10q-38-64-52-136.5T90 440q17-113 89-201 69-84 172-123 106-41 219-21t199 90q84 68 123 169 40 103 23 216zm-665-70q0 21 14.5 35.5T300 550t35.5-14.5T350 500t-14.5-35.5T300 450t-35.5 14.5T250 500zm200 0q0 21 14.5 35.5T500 550t35.5-14.5T550 500t-14.5-35.5T500 450t-35.5 14.5T450 500zm200 0q0 21 14.5 35.5T700 550t35.5-14.5T750 500t-14.5-35.5T700 450t-35.5 14.5T650 500z"
    />
  </svg>
);

export default SvgChat;