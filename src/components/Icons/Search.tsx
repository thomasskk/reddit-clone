import * as React from "react";
import { SVGProps } from "react";

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M970 930 730 690q71-84 91-192 18-106-17-207-35-105-119-176T494 24Q390 6 289 41 186 76 115 160T24 352Q6 458 41 559q35 105 119 176 76 64 173 87 94 22 187 0 96-23 170-87l240 240zM425 770q-93 0-174-47-78-46-124-124-47-81-47-174t47-174q46-78 124-124 81-47 174-47t174 47q78 46 124 124 47 81 47 174t-47 174q-46 78-124 124-81 47-174 47z"
    />
  </svg>
);

export default SvgSearch;
