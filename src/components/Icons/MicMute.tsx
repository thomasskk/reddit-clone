import * as React from "react";
import { SVGProps } from "react";

const SvgMicMute = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M831 525h-62q-1 49-18 95l48 48q32-68 32-143zM500 106q39 0 72 19.5t52.5 52.5 19.5 72v250l-1 12 52 52q11-31 11-64V250q0-49-21.5-92t-60-72.5-87-38.5-94.5 5-82 46.5-53 78.5l51 50q8-52 48-86.5t93-34.5zm-358 91 152 151v152q0 56 27.5 103.5t75 75T500 706q63 0 115-36l59 58q-36 32-81 49t-93 17q-73 0-134.5-36.5t-98-98T231 525h-62q0 84 40 158 39 71 106 117 70 47 154 55v89h-90v62h242v-62h-90v-89q52-5 100-26t88-56l60 60 44-44-637-637zm358 447q-39 0-72-19.5T375.5 572 356 500v-89l214 214q-32 19-70 19z"
    />
  </svg>
);

export default SvgMicMute;
