import * as React from "react";
import { SVGProps } from "react";

const SvgPowerup = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M860 350q-4-11-14.5-18t-25.5-7H645L760 95q8-24 0-40-7-20-35-20H315q-14 0-25 9t-15 21L160 525v10q0 18 12 29t28 11h140l-60 350q-7 29 25 45 3 3 7 4t13 1q20 0 35-15l500-565q5-15 6-23 1-12-6-22zM355 860l60-350H225L330 95h365L545 385h235z"
    />
  </svg>
);

export default SvgPowerup;
