import * as React from "react";
import { SVGProps } from "react";

const SvgBanFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1016 1000" {...props}>
    <path
      fill="currentColor"
      d="m979 485-53-53q-18-18-42-28t-50-10h-46L606 212v-46q0-26-10-50t-28-42l-53-53Q498 4 475 4t-40 17L171 285q-17 17-17 40t17 40l53 53q18 18 42 28t50 10h46l182 182v46q0 26 10 50t28 42l53 53q17 17 40 17t40-17l264-264q17-17 17-40t-17-40zm-607 87-44-44L53 803q-30 30-29.5 72t30 71.5 71.5 30 72-29.5l275-275-22-22z"
    />
  </svg>
);

export default SvgBanFill;
