import * as React from "react";
import { SVGProps } from "react";

const SvgBan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1016 1000" {...props}>
    <path
      fill="currentColor"
      d="m979 485-53-53q-18-18-42-28t-50-10h-46L606 212v-46q0-26-10-50t-28-42l-53-53Q498 4 475 4t-40 17L171 285q-17 17-17 40t17 40l53 53q18 18 42 28t50 10h46l19 19L53 803q-30 30-29.5 72t30 71.5 71.5 30 72-29.5l328-328 19 19v46q0 26 10 50t28 42l53 53q17 17 40 17t40-17l264-264q17-17 17-40t-17-40zM153 903q-9 8-20.5 10.5t-22.5-2T92.5 897 86 875q0-16 11-28l328-328 56 56zm522-122-49-49q-20-20-20-48v-72L388 394h-72q-28 0-48-20l-49-49L475 69l49 49q20 20 20 48v72l218 218h71q29 0 49 20l49 49z"
    />
  </svg>
);

export default SvgBan;
