import * as React from "react";
import { SVGProps } from "react";

const SvgAudio = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M831 525h-62q0 73-36.5 134.5t-98 98T500 794t-134.5-36.5-98-98T231 525h-62q0 84 40 158 39 71 106 117 70 47 154 55v89h-90v62h242v-62h-90v-89q84-8 154-55 67-46 106-117 40-74 40-158zM500 706q56 0 103.5-27.5t75-75T706 500V250q0-56-27.5-103.5t-75-75T500 44 396.5 71.5t-75 75T294 250v250q0 56 27.5 103.5t75 75T500 706zM356 250q0-39 19.5-72t52.5-52.5 72-19.5 72 19.5 52.5 52.5 19.5 72v250q0 39-19.5 72T572 624.5 500 644t-72-19.5-52.5-52.5-19.5-72V250z"
    />
  </svg>
);

export default SvgAudio;
