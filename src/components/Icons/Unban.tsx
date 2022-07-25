import * as React from "react";
import { SVGProps } from "react";

const SvgUnban = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1016 1000" {...props}>
    <path
      fill="currentColor"
      d="m475 69 49 49q20 20 20 48v72l218 218h71q29 0 49 20l49 49-63 63 44 44 67-67q17-16 17-39.5T979 485l-53-53q-18-18-42-28t-50-10h-46L606 212v-46q0-26-10-50t-28-42l-53-53Q499 4 475.5 4T435 21l-67 67 44 44zM147 57l126 126-102 102q-17 16-17 39.5t17 40.5l53 53q18 18 42 28t50 10h46l19 19L53 803q-30 30-29.5 72t30 71.5 71.5 30 72-29.5l328-328 19 19v46q0 26 10 50t28 42l53 53q17 17 40 17t40-17l102-102 126 126 44-44L191 13zm6 846q-12 11-28 11t-27.5-11.5T86 875t11-28l328-328 56 56zm522-122-49-49q-20-20-20-48v-72L388 394h-72q-28 0-48-20l-49-49 98-98 456 456z"
    />
  </svg>
);

export default SvgUnban;
