import * as React from "react";
import { SVGProps } from "react";

const SvgTopicPhotography = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 537q-44 0-81.5-21.5t-59.5-59-21.5-81.5 22-81.5 59-59.5 81.5-22 81.5 22 59.5 59.5 21.5 81.5-22 81.5-59 59T500 538v-1zm0-250q-36 0-62 26t-25.5 62 26 61.5T500 462t61.5-25.5T587 375t-25.5-61.5T500 287zm250 13q-5 0-10-1t-9.5-3-8.5-5l-7-6q-7-7-11-16t-4-19q0-21 15-36 10-10 25-13t29 3q9 4 16 11l6 7q3 4 5 8.5t3 9.5 1 10q0 10-4 19t-11 16-16 11-19 4zm50 637H200q-37 0-68.5-18.5t-50-50T63 800q0-16 10.5-27t26.5-10.5 26.5 11T138 800q0 26 18 44t44 18h600q26 0 44-18t19-44V687H100q-16 0-27-10.5T62 650V200q1-37 19.5-68.5t50-50T200 62h600q37 1 68.5 19.5t50 50T937 200v600q0 37-18.5 68.5t-50 50T800 937zM138 612h725V200q-1-26-19-44t-44-18H200q-26 0-44 18t-19 44z"
    />
  </svg>
);

export default SvgTopicPhotography;
