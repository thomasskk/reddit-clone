import * as React from "react";
import { SVGProps } from "react";

const SvgSaved = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M325 544q-7 0-14 3l-155 77V106h338v120l6-1h56V100q0-23-16.5-39.5T500 44H150q-23 0-39.5 16.5T94 100v575q0 17 14.5 26.5T139 703l186-93 50 25v-70l-36-18q-7-3-14-3zm525-250H500q-23 0-39.5 16.5T444 350v575q0 17 14.5 26.5T489 953l186-93 186 93q7 3 14 3 13 0 22-9t9-22V350q0-23-16.5-39.5T850 294zm-6 580-155-77q-14-7-28 0l-155 77V356h337z"
    />
  </svg>
);

export default SvgSaved;
