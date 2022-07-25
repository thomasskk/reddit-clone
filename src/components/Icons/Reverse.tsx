import * as React from "react";
import { SVGProps } from "react";

const SvgReverse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M600 144H186l84-70-40-48L80 151q-11 9-11 24t11 24l150 125 40-48-84-70h414q80 0 148 40 67 39 106 106 40 68 40 148t-40 148q-39 67-106 106-68 40-148 40H100v62h500q97 0 180-48 80-48 128-128 48-83 48-180t-48-180q-48-80-128-128-83-48-180-48z"
    />
  </svg>
);

export default SvgReverse;
