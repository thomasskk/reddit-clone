import * as React from "react";
import { SVGProps } from "react";

const SvgBounce = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m926 730-70 84V400q0-97-48-180-48-80-128-128-83-48-180-48T320 92q-80 48-128 128-48 83-48 180v414l-70-84-48 40 125 150q9 11 24 11t24-11l125-150-48-40-70 84V400q0-80 40-148 39-67 106-106 68-40 148-40t148 40q67 39 106 106 40 68 40 148v414l-70-84-48 40 125 150q9 11 24 11t24-11l125-150z"
    />
  </svg>
);

export default SvgBounce;
