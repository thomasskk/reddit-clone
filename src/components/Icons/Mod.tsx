import * as React from "react";
import { SVGProps } from "react";

const SvgMod = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 1000q-8 0-15-2-74-20-147-54-123-55-196-128-98-97-98-216V174q0-19 12-34t30-20l400-99q14-4 28 0l400 99q18 5 30 20t12 35v425q0 119-98 216-73 73-196 128-74 34-147 54-7 2-15 2zM106 179v421q0 100 94 184 69 62 181 111 63 27 121 43v-1q62-18 120-43 112-49 180-111 92-84 92-183V179L500 81z"
    />
  </svg>
);

export default SvgMod;
