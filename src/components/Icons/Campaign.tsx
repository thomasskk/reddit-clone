import * as React from "react";
import { SVGProps } from "react";

const SvgCampaign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M903 63q-19-12-40.5-12T822 61L518 228H216q-53 1-97 27.5T49 327t-26 97.5T49 522t70 71.5 97 27.5h34l-70 218q-2 4-2 9 1 24 17 40.5t40 16.5h147q21 0 37-14.5t19-35.5l89-229 295 161q19 11 40.5 10.5t40-11.5 29-29.5T942 716V132q0-21-10.5-40T903 63zM82 424q0-36 18-67t49-49 67-18h279v268H216q-36 0-67-18t-49-48.5T82 424zm296 413q-1 2-2 5H244l71-221h147zm502-121q0 11-9 16.5t-19 .5L557 571V277l295-161q10-5 19 .5t9 15.5v584z"
    />
  </svg>
);

export default SvgCampaign;
