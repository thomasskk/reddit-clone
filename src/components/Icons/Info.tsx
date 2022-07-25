import * as React from "react";
import { SVGProps } from "react";

const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 44q-124 0-230 62-103 61-164 164-62 106-62 230t62 230q61 103 164 164 106 62 230 62t230-62q103-61 164-164 62-106 62-230t-62-230q-61-103-164-164-106-62-230-62zm0 850q-107 0-199-54-89-52-141-141-54-92-54-199t54-199q52-89 141-141 92-54 199-54t199 54q89 52 141 141 54 92 54 199t-54 199q-52 89-141 141-92 54-199 54zm-40-483h81v365h-81V411zm68-152q-17-9-36.5-5.5t-32 18.5-12.5 34.5 12.5 34.5 32 18.5T528 353q12-7 19.5-19.5t7.5-27-7.5-27T528 259z"
    />
  </svg>
);

export default SvgInfo;
