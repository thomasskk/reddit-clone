import * as React from "react";
import { SVGProps } from "react";

const SvgTopicHealth = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M650 162H350q-64 1-119 32.5T144.5 281 112 400v350q1 64 32.5 119t86.5 86.5T350 987h300q64 0 119-31.5t86.5-86.5T887 750V400q0-64-31.5-119T769 194.5 650 163v-1zm163 588q-1 44-22.5 81.5t-59 59T650 913H350q-44-1-81.5-22.5t-59-59T187 750V400q1-44 22.5-81.5t59-59T350 237h300q44 1 81.5 22.5t59 59T813 400v350zM250 87h500q16 1 27-10t11-27-11-27-27-11H250q-16 0-26.5 11T213 50t10.5 27T250 88v-1zm350 425h-62v-62q0-16-11-27t-27-11-27 11-11 27v62h-62q-16 1-27 11.5T362.5 550t11 27 26.5 11h63v62q0 16 10.5 27t26.5 10.5 27-11 11-26.5v-63h62q16 1 27-10t11-27-11-27-27-11z"
    />
  </svg>
);

export default SvgTopicHealth;
