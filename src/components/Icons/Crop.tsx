import * as React from "react";
import { SVGProps } from "react";

const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M950 744H256V325h-62v425q0 23 16.5 39.5T250 806h494v144h62V806h144v-62zm-206-69h62V250q0-23-16.5-39.5T750 194H256V50h-62v144H50v62h694v419z"
    />
  </svg>
);

export default SvgCrop;
