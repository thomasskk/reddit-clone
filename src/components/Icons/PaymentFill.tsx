import * as React from "react";
import { SVGProps } from "react";

const SvgPaymentFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M850 94H150q-36 0-66 17.5T36.5 159 19 225v550q0 36 17.5 66T84 888.5t66 17.5h700q36 0 66-17.5t47.5-47.5 17.5-66V225q0-36-17.5-66T916 111.5 850 94zM325 712H150v-75h175v75zm38-200H138V287h225v225zm225 200H413v-75h175v75zm262 0H675v-75h175v75z"
    />
  </svg>
);

export default SvgPaymentFill;
