import * as React from "react";
import { SVGProps } from "react";

const SvgMeme = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1026 1000" {...props}>
    <path
      fill="currentColor"
      d="M1006 344h-50V70q0-15-7.5-28.5t-21-21-29-7T870 22L671 145q-83-26-171-26t-171 26L130 22q-13-8-28.5-8.5t-29 7-21 21T44 70v350q-25 63-25 130 1 85 38.5 161T162 839q71 58 158.5 88T500 956q92 1 179.5-29T838 839q55-44 90.5-104T976 606h30V344zM321 214l14-5q80-28 165-28t165 28l14 5L894 81v263H644v50h-88v-50H194v50h-90l2-313zm477 577q-63 51-140 77.5T500 894q-81 1-158-25.5T202 791q-56-43-87.5-106.5T81 550q0-48 16-94h97v150h362V456h88v150h269q-12 55-41.5 102.5T798 791zM330 678l-44 44q44 41 99 63t115 21q42 0 83-10l-16-61q-63 17-126 1.5T330 678z"
    />
  </svg>
);

export default SvgMeme;
