import * as React from "react";
import { SVGProps } from "react";

const SvgCodeInline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m774 770-48-40 184-230-184-230 48-40 200 250q7 9 7 20t-7 20zm-548 0L26 520q-7-9-7-20t7-20l200-250 48 40L90 500l184 230zm274-89q-55 0-100.5-30.5t-66.5-81T322.5 465t49.5-93q35-34 81.5-45.5t93 0T628 372l-44 44q-23-22-53.5-29.5t-61 0T416 416q-17 17-26 38.5t-9 45.5 9 45.5 26 38.5q23 22 53.5 29.5t61 0T584 584l44 44q-25 26-58.5 39.5T500 681z"
    />
  </svg>
);

export default SvgCodeInline;
