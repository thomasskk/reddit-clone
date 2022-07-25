import * as React from "react";
import { SVGProps } from "react";

const SvgCampaignFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M180 839q-2 4-2 9 0 24 16.5 40.5T234 905h148q21 0 37-14.5t19-35.5l64-165H228zm252-218q-6-15-6-31V259q0-16 6-31H216q-53 1-97 27.5T49 327t-26 97.5T49 522t70 71.5 97 27.5h216zM903 63q-19-12-40.5-12T822 61L511 232q-7 4-11.5 11t-4.5 16v331q0 8 4.5 15.5T511 617l311 170q19 11 40.5 10.5t40-11.5 29.5-29.5 11-40.5V132q0-21-11-40t-29-29z"
    />
  </svg>
);

export default SvgCampaignFill;
