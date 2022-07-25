import * as React from "react";
import { SVGProps } from "react";

const SvgBotFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 194H125q-34 0-57.5 23.5T44 275v600q0 34 23.5 57.5T125 956h750q34 0 57.5-23.5T956 875V275q0-34-23.5-57.5T875 194zM250 400h100v100H250V400zm425 300v12q0 30-21 46.5T600 775H400q-31 0-53-22t-22-53v-75h350v75zm75-200H650V400h100v100zM631 150q0-36-17.5-66T566 36.5 500 19t-66 17.5T386.5 84 369 150h262z"
    />
  </svg>
);

export default SvgBotFill;
