import * as React from "react";
import { SVGProps } from "react";

const SvgTopicFood = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M400 12q-16 0-27 11t-11 27v200q1 31-14.5 56.5t-41 40.5-56.5 15.5-56.5-15-41-41T137 250V50q1-16-10-27t-27-11-26.5 11T62 50v200q1 44 20 83t53.5 65.5T213 434l5 516q0 16 11 27t26 11q16-1 27-12t11-26l-5-516q43-9 77-36t53-65.5 20-82.5V50q-1-16-11.5-27T400 12zM250 287q16 0 27-10.5t11-26.5V50q0-16-11-27t-27-11-26.5 11T213 50v200q0 16 10.5 26.5T250 288v-1zM850 12q-78 1-145 40-65 38-103 103-39 67-39 145v200q0 60 34 108.5t90 68.5q15 5 29-2t19-21.5-1.5-28.5-20.5-19q-34-12-54.5-41T637 500V300q1-51 23.5-95.5T723 130t90-39v859q0 16 10.5 26.5T850 987t27-10.5 11-26.5V50q-1-16-11.5-27T850 12z"
    />
  </svg>
);

export default SvgTopicFood;
