import * as React from "react";
import { SVGProps } from "react";

const SvgSavedFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M556 225V100q0-23-16.5-39.5T500 44H150q-23 0-39.5 16.5T94 100v575q0 17 14.5 26.5T139 703l186-93 50 25V350q0-34 17-62.5t45.5-45.5 62.5-17h56zm294 69H500q-23 0-39.5 16.5T444 350v575q0 17 14.5 26.5T489 953l186-93 186 93q7 3 14 3 13 0 22-9t9-22V350q0-23-16.5-39.5T850 294z"
    />
  </svg>
);

export default SvgSavedFill;
