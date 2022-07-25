import * as React from "react";
import { SVGProps } from "react";

const SvgMemeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M194 394v-50h362v50h88v-50h312V70q0-15-7.5-28.5t-21-21-29-7T870 22L671 145q-83-26-171-26t-171 26L130 22q-13-8-28.5-8.5t-29 7-21 21T44 70v324h150zm450 212V456h-88v150H194V456H32q-13 46-13 94 1 85 38.5 161T162 839q71 58 158.5 88T500 956q92 1 179.5-29T838 839q55-44 90.5-104T976 606H644zM500 806q-60 1-115-21t-98-63l43-44q48 43 111 58.5t126-1.5l16 60q-41 11-83 11z"
    />
  </svg>
);

export default SvgMemeFill;
