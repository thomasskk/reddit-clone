import * as React from "react";
import { SVGProps } from "react";

const SvgRemoveFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 25q-129 0-240 65-107 63-170 170-65 111-65 240t65 240q63 107 170 170 111 65 240 65t240-65q107-63 170-170 65-111 65-240t-65-240Q847 153 740 90 629 25 500 25zM125 500q0-62 20-120t57-107l525 525q-85 65-191.5 75.5t-202.5-37T181 698t-56-198zm673 227L273 202q73-57 164-72 89-16 175 11 88 27 154 92.5T859 388q27 86 11 174-16 92-72 165z"
    />
  </svg>
);

export default SvgRemoveFill;
