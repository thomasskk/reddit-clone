import * as React from "react";
import { SVGProps } from "react";

const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M956 176q0-34-24-57.5T874 94H128q-34 0-58 23.5T46 175v650q0 34 24 57.5t57 23.5h748q34 0 57.5-23.5T956 825V176zm-842-14q6-6 13-6l747 1q8 0 13.5 5.5T893 176v53L549 574q-21 19-49 19t-49-19L109 231v-56q0-8 5-13zm774 676q-5 6-13 6H127q-7 0-12.5-5.5T109 825V319l298 299q19 18 43 28t50 10 50-10 43-28l300-301 1 508q0 8-6 13z"
    />
  </svg>
);

export default SvgMessage;
