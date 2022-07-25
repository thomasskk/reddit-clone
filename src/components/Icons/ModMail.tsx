import * as React from "react";
import { SVGProps } from "react";

const SvgModMail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M956 176q0-34-24-57.5T874 94H128q-34 0-58 23.5T46 175v650q0 34 24 57.5t57 23.5h748q34 0 57.5-23.5T956 825V176zm-847-1q0-8 5.5-13.5T127 156l747 1q8 0 13.5 5.5T893 176v53L706 416v-94l-206-51-206 51v94L109 231v-56zm535 196v173q0 46-61 83-36 23-83 37-47-14-83-37-61-37-61-83V371l144-36zm244 467q-5 6-13 6H127q-7 0-12.5-5.5T109 825V319l185 185v40q0 59 49 106 36 34 94 58 30 13 55 19l8 2 8-2q24-6 55-19 58-24 93-58 50-47 50-106v-40l187-187 1 508q0 8-6 13z"
    />
  </svg>
);

export default SvgModMail;
