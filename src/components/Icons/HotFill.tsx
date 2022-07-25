import * as React from "react";
import { SVGProps } from "react";

const SvgHotFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 482q-65 43-111.5 105.5T321 725q-11 48-.5 95.5T361 907q25 32 61 50t76 18q37 0 71.5-14t61-40 41-60.5T686 789q0-106-74-202-46-60-112-105zm16-459-18-7-15 7q-60 32-126 82-118 89-190 194-98 144-98 301 3 107 61.5 196.5T286 931q-31-50-41-107.5t3-114.5q26-95 86-173t144-129l20-12 24 12q34 21 73 54 68 60 109 129 57 95 57 199 0 74-40 138 94-46 150.5-134T931 600q0-157-98-301-72-105-190-194-67-51-127-82z"
    />
  </svg>
);

export default SvgHotFill;
