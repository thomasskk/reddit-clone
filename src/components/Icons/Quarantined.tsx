import * as React from "react";
import { SVGProps } from "react";

const SvgQuarantined = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M917 336 664 83q-45-45-104.5-60.5t-119 0T336 83L83 336q-45 45-60.5 104.5t0 119T83 664l254 253q44 45 103.5 60.5t119 0T664 917l253-253q45-45 60.5-104.5t0-119T917 336zm-44 283L619 873q-33 31-76 42t-86 0-76-42L127 619q-24-23-36.5-54T78 500t12.5-65 36.5-54l254-254q23-24 54-36.5T500 78t65 12.5 54 36.5l254 254q24 23 36.5 54t12.5 65-12.5 65-36.5 54zM431 500q0 28 20.5 48.5T500 569t48.5-20.5T569 500t-20.5-48.5T500 431t-48.5 20.5T431 500zm210-243-27-16-78 133q34 10 58 34t33 57 0 66h154v-31q0-75-37.5-140.5T641 257zM369 500q0-44 26.5-78.5T464 374l-77-133-28 16q-65 37-102.5 102.5T219 500v31h154q-4-15-4-31zm131 131q-25 0-48.5-9.5T409 594l-77 134 27 15q66 38 141 38t141-38l27-15-77-134q-19 18-42.5 27.5T500 631z"
    />
  </svg>
);

export default SvgQuarantined;
