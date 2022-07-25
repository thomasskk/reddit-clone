import * as React from "react";
import { SVGProps } from "react";

const SvgLogoutFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 25H325q-41 0-75.5 20T195 99.5 175 175v42h100v-42q0-21 14.5-35.5T325 125h500q21 0 35.5 14.5T875 175v650q0 21-14.5 35.5T825 875H325q-21 0-35.5-14.5T275 825v-42H175v42q0 41 20 75.5t54.5 54.5 75.5 20h500q41 0 75.5-20t54.5-54.5 20-75.5V175q0-41-20-75.5T900.5 45 825 25zM500 650q0 8 4 14t11 9q5 2 10 2 10 0 18-7l150-150q7-8 7-18t-7-18L543 332q-6-5-13.5-6.5T515 327t-11 9-4 14v100H50v100h450v100z"
    />
  </svg>
);

export default SvgLogoutFill;
