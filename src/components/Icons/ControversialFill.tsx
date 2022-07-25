import * as React from "react";
import { SVGProps } from "react";

const SvgControversialFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M920 44H727l-17 1-482 530-101-102-53 53 400 400 53-52-102-102 519-472 12-13V80q0-15-10.5-25.5T920 44zM153 703 53 803q-30 30-29.5 72t30 71.5 71.5 30 72-29.5l100-100z"
    />
  </svg>
);

export default SvgControversialFill;
