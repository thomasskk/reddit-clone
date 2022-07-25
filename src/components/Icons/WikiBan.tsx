import * as React from "react";
import { SVGProps } from "react";

const SvgWikiBan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M713 317q-15-39-43.5-69.5t-65.5-49-78.5-23-82 5.5-74.5 33.5-58 57.5-34.5 74-6.5 81.5 22.5 79 48.5 66 68 45 79.5 18.5 81-10.5 72.5-38 54.5-61T727 450q13-69-14-133zM500 574q-34 0-65-13t-54.5-36.5T344 470t-13-65q0-52 30-95l234 234q-43 30-95 30zm139-74L405 266q43-30 95-30 34 0 65 13t54.5 36.5T656 340t13 65q0 52-30 95zM844 0H231q-26 0-50 10t-42.5 28.5T110 81t-10 50v735h1l-1 9q0 25 9.5 48t27 40.5 40.5 27 48 9.5h619q23 0 39.5-16.5T900 944V56q0-23-16.5-39.5T844 0zm-6 938H225q-26 0-44-18.5T163 875t18-44 44-18h613v125zM225 751q-34 0-62 17V131q0-29 20-49t48-20h607v689H225z"
    />
  </svg>
);

export default SvgWikiBan;
