import * as React from "react";
import { SVGProps } from "react";

const SvgSpamFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M175 425q-36 0-70-13t-61-37v450q0 36 17.5 66t47.5 47.5 66 17.5h650q36 0 66-17.5t47.5-47.5 17.5-66V375q-27 24-61 37t-70 13H175zm477 348-53 53-99-98-98 98-53-53 98-98-98-99 53-53 98 99 99-99 53 53-99 99zM175 44h650q36 0 66 17.5t47.5 47.5 17.5 66v50q0 36-17.5 66T891 338.5 825 356H175q-36 0-66-17.5T61.5 291 44 225v-50q0-36 17.5-66T109 61.5 175 44z"
    />
  </svg>
);

export default SvgSpamFill;
