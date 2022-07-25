import * as React from "react";
import { SVGProps } from "react";

const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M200 977q-23 0-39.5-16.5T144 921V79q0-15 8-28.5t21.5-21 29-7T231 32l652 421q12 8 19 20.5t7 26.5-7 26.5-19 20.5L231 968q-14 9-31 9zm6-886v818l635-409z"
    />
  </svg>
);

export default SvgPlay;
