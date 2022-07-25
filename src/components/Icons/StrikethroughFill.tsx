import * as React from "react";
import { SVGProps } from "react";

const SvgStrikethroughFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M430 367q-14-18-14.5-39.5t12.5-38 32-25 40-8.5q24 0 44.5 11.5T580 297q13 15 20 33l165-68q-20-49-59-87t-90-57q-57-22-118-21-70-1-133 27-58 26-92 79-36 56-34 122 0 21 3 42h188zm520 83H50v100h371l24 9 24 9q36 11 70 25 27 12 47 32t19 48q1 24-12.5 43t-36 29.5T509 756q-22 0-42.5-8T429 724q-34-31-49-75l-170 72q18 57 61 99 48 47 109.5 72.5T509 918q74 1 140-33 62-31 98.5-89T783 669q1-31-8.5-61.5T747 551l-1-1h204V450z"
    />
  </svg>
);

export default SvgStrikethroughFill;
