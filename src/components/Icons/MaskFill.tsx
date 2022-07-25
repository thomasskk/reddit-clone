import * as React from "react";
import { SVGProps } from "react";

const SvgMaskFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1020 1000" {...props}>
    <path
      fill="currentColor"
      d="m186 253-79-62q-34 44-59 94l91 43q19-40 47-75zm-1-141 63 77q34-28 74-47l-44-90q-50 25-93 60zm-75 300-98-22Q0 444 0 500h100q0-45 10-88zm696-169 77-64q-36-43-80-77l-61 80q36 27 64 61zm81 157 97-25q-14-54-40-104l-88 46q20 39 31 83zm-65 337 81 60q33-45 55-96l-91-40q-18 40-45 76zM689 853l47 88q49-27 91-63l-65-76q-34 30-73 51zm311-369-100 3v13q0 38-7 76l98 19q9-47 9-95v-16zM382 14l24 97q43-10 88-11L492 0q-56 1-110 14zm220-4-20 98q44 9 84 28l42-91q-51-23-106-34v-1zm-83 890 5 100q55-3 109-18l-26-96q-43 12-88 14zM69 556q-12 3-18.5 12.5T44 590v228q0 19 15 29l17 10 152-50q18-6 23-24l4-20-146-195q-7-9-18-12.5t-22 .5z"
    />
  </svg>
);

export default SvgMaskFill;
