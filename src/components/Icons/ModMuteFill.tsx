import * as React from "react";
import { SVGProps } from "react";

const SvgModMuteFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M362 340q-24 39-24 84t21.5 82.5 59 59T501 587t84-24zM775 44H225q-49 0-90.5 24.5t-66 66T44 225v400q0 49 24.5 90.5t66 66T225 806h119v113q0 17 9 31t24 21q11 5 23 5 22 0 37-15l175-155h163q49 0 90.5-24.5t66-66T956 625V225q0-49-24.5-90.5t-66-66T775 44zM500 662q-65 0-119.5-31.5t-86-86-32-119.5T294 305.5t86.5-86T500 188t119.5 31.5 86.5 86 31.5 119-32 119.5-86.5 86.5T500 663v-1zm138-152q24-39 24-84t-21.5-82.5-59-59T499 263t-84 24z"
    />
  </svg>
);

export default SvgModMuteFill;
