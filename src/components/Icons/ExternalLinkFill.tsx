import * as React from "react";
import { SVGProps } from "react";

const SvgExternalLinkFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M750 800q0 21-14.5 35.5T700 850H196q-20 0-35-14.5T146 800V300q0-21 15-35.5t35-14.5h165V150H196q-40 0-74.5 20t-55 54.5T46 300v500q0 41 20.5 75.5t55 54.5 74.5 20h504q41 0 75.5-20t54.5-54.5 20-75.5V639H750v161zM900 69H650q-9 0-17 5t-12 14-2 18 9 16l90 90-303 303 70 70 303-303 90 90q9 9 22 9 6 0 12-2 9-4 14-12t5-17V100q0-13-9-22t-22-9z"
    />
  </svg>
);

export default SvgExternalLinkFill;
