import * as React from "react";
import { SVGProps } from "react";

const SvgUnheart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m472 271 28 59 28-59q21-45 60-75t87-39 96 4.5 83.5 47T907 288t11 95q-11 74-43.5 141T791 646l44 43q59-62 96-139t49-161q7-60-12-115.5T908.5 175t-96-65-114-18.5-110.5 31-88 74.5q-45-59-113.5-87T245 94l-4 1 59 59q56 4 102 35.5t70 81.5zM28 72l84 84q-50 44-74 105.5T20 388q10 127 111 260 76 100 197 197 72 58 143 102 13 8 29 8t29-8q113-71 212-162l187 187 44-44L72 28zm472 819q-69-43-137-98-111-89-180-179Q91 494 82 383q-5-52 14.5-100.5T156 201l541 541q-92 83-197 149z"
    />
  </svg>
);

export default SvgUnheart;
