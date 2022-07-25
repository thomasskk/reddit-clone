import * as React from "react";
import { SVGProps } from "react";

const SvgChatNew = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M840 160Q777 96 695.5 60T525 19.5t-174 23T197 126 83.5 259 25 425q-13 81 1.5 161T82 737L23 932q-3 9-.5 19t9.5 17 16.5 9.5T67 977l200-57q108 61 233 61 39 0 77-6 88-15 165-59.5T874.5 802t83-154T980 474t-41-170-99-144zm73 409q-15 87-63 160.5T728.5 851 567 914q-72 12-144.5-2T287 860l-12-7-178 51 53-175-8-12q-38-64-52.5-136.5T86 435q18-111 89-198t176-127 216-22 198 89 126.5 176T913 569zM531 300h-62v169H300v62h169v169h62V531h169v-62H531V300z"
    />
  </svg>
);

export default SvgChatNew;
