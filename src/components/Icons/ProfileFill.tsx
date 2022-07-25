import * as React from "react";
import { SVGProps } from "react";

const SvgProfileFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M981 500q0-113-49-213-49-99-135-166-88-70-198-93t-219 5q-106 27-190 98-86 72-131 175T19 522q5 109 57 206 53 98 145 164 83 59 181 79t196 0 181-79q95-68 148.5-171.5T981 500zM500 269q42 0 78 21t57 57 21 78-21 78-57 57-78 21-78-21-57-57-21-78 21-78 57-57 78-21zm0 650q-73 0-141-24.5T235 824q24-70 83.5-112.5T452 669h96q74 0 133.5 42.5T765 824q-56 46-124.5 70.5T500 919z"
    />
  </svg>
);

export default SvgProfileFill;
