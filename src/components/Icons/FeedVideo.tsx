import * as React from "react";
import { SVGProps } from "react";

const SvgFeedVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M125 106h600q8 0 13.5 5.5T744 125h62q0-34-23.5-57.5T725 44H125q-34 0-57.5 23.5T44 125v600q0 34 23.5 57.5T125 806v-62q-8 0-13.5-5.5T106 725V125q0-8 5.5-13.5T125 106zm750 88H275q-34 0-57.5 23.5T194 275v600q0 34 23.5 57.5T275 956h600q34 0 57.5-23.5T956 875V275q0-34-23.5-57.5T875 194zm19 681q0 8-5.5 13.5T875 894H275q-8 0-13.5-5.5T256 875V275q0-8 5.5-13.5T275 256h600q8 0 13.5 5.5T894 275v600zm-452-69q-13 0-22.5-9t-9.5-22V377q0-9 4.5-16t12-11 16-4 16.5 5l308 199q14 9 14 26t-14 27L459 801q-8 5-17 5zm31-372v284l219-142z"
    />
  </svg>
);

export default SvgFeedVideo;
