import * as React from "react";
import { SVGProps } from "react";

const SvgFeedPosts = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M125 106h600q8 0 13.5 5.5T744 125h62q0-34-23.5-57.5T725 44H125q-34 0-57.5 23.5T44 125v600q0 34 23.5 57.5T125 806v-62q-8 0-13.5-5.5T106 725V125q0-8 5.5-13.5T125 106zm750 88H275q-34 0-57.5 23.5T194 275v600q0 34 23.5 57.5T275 956h600q34 0 57.5-23.5T956 875V275q0-34-23.5-57.5T875 194zm19 681q0 8-5.5 13.5T875 894H275q-8 0-13.5-5.5T256 875V275q0-8 5.5-13.5T275 256h600q8 0 13.5 5.5T894 275v600zM400 394h350v62H400v-62zm0 150h350v62H400v-62zm0 150h350v62H400v-62z"
    />
  </svg>
);

export default SvgFeedPosts;
