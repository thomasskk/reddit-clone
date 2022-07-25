import * as React from "react";
import { SVGProps } from "react";

const SvgVolume = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M527 25q-14-7-30-5.5T468 31L189 244H99q-23 0-39.5 16.5T43 300v400q0 23 16.5 39.5T100 756h90l278 213q15 12 34 12 24 0 40.5-16.5T559 924V76q0-17-8.5-30.5T527 25zm-31 887L211 694H106V306h105L496 88v824zm154-743v62q73 0 134.5 36.5t98 98T919 500t-36.5 134.5-98 98T650 769v62q90 0 167-45 75-44 119-119 45-77 45-167t-45-167q-44-75-119-119-77-45-167-45zm156 331q0-42-21-78t-57-57-78-21v62q39 0 66.5 27.5T744 500t-27.5 66.5T650 594v62q42 0 78-21t57-57 21-78z"
    />
  </svg>
);

export default SvgVolume;
