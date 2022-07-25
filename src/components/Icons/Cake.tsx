import * as React from "react";
import { SVGProps } from "react";

const SvgCake = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M930 391 727 263q4-19 4-38 0-41-22-82-19-35-52-66-29-26-61-43-29-15-46-15-66 14-112 64-16-9-34-6.5T373 92L63 397q-17 17-17 40v411q0 23 16.5 39.5T102 904l798 2q23 0 39.5-16.5T956 850V439q0-15-7-27.5T930 391zM548 81q12 3 40 22 33 23 54 51 27 36 27 71 0 32-16 59.5T609.5 328 550 344t-59.5-16-43.5-43.5-16-59.5q0-35 27-71 21-27 53-51 26-19 37-22zM108 842l-2-400 271-267q-8 24-8 50 0 60 36 108.5t94 65.5 114.5-4.5T703 322l191 120v102H250v62h644v88H250v62h644v88z"
    />
  </svg>
);

export default SvgCake;
