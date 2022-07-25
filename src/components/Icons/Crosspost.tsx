import * as React from "react";
import { SVGProps } from "react";

const SvgCrosspost = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m797 603-44 44 96 97H600q-66 0-122-33t-89-89-33-122v-6q0-66 33-122t89-89 122-33h255L753 353l44 44 147-148q10-11 10-26t-11-25L797 53l-44 44 91 90H600q-78 1-146 38T343.5 326.5 295 469H50v62h245q8 77 51 140t110 99 144 36h251l-98 97 44 44 146-145q11-10 11-25t-10-26z"
    />
  </svg>
);

export default SvgCrosspost;
