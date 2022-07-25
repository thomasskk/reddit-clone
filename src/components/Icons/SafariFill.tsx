import * as React from "react";
import { SVGProps } from "react";

const SvgSafariFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M510 20q-130 0-242 66-109 63-172 172-66 112-66 242t66 242q63 109 172 172 112 66 242 66t242-66q109-63 172-172 66-112 66-242t-66-242Q861 149 752 86 640 20 510 20zm200 320L590 570l-15 15-225 120q-11 7-23.5 2T310 690q-7-15 0-30l120-230 15-15 230-120q11-7 23.5-2t16.5 17q0 20-5 30z"
    />
  </svg>
);

export default SvgSafariFill;
