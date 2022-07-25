import * as React from "react";
import { SVGProps } from "react";

const SvgPendingPostsFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M125 275q0-42 19.5-76.5t54-54T275 125h530q0-34-23-57t-57-23H125q-34 0-57 23t-23 57v600q0 34 23 57t57 23V275zm750-80H275q-34 0-57 23t-23 57v600q0 34 23 57t57 23h600q34 0 57-23t23-57V275q0-34-23-57t-57-23zM745 360l45 45-85 85-45-45zM305 545h120v60H305v-60zm100 245-45-45 85-85 45 45zm40-300-85-85 45-45 85 85zm160 355h-60V725h60v120zm0-420h-60V305h60v120zm140 365-85-85 45-45 85 85zm100-185H725v-60h120v60z"
    />
  </svg>
);

export default SvgPendingPostsFill;
