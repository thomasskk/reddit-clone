import * as React from "react";
import { SVGProps } from "react";

const SvgVolumeMute = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m972 372-44-44-103 103-103-103-44 44 103 103-103 103 44 44 103-103 103 103 44-44-103-103zM527 25q-14-7-30-5.5T468 31L189 244H99q-23 0-39.5 16.5T43 300v400q0 23 16.5 39.5T100 756h90l278 213q15 12 34 12 24 0 40.5-16.5T559 924V76q0-17-8.5-30.5T527 25zm-31 887L211 694H106V306h105L496 88v824z"
    />
  </svg>
);

export default SvgVolumeMute;
