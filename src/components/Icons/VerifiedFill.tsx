import * as React from "react";
import { SVGProps } from "react";

const SvgVerifiedFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M964 460 856 352V200q0-23-16.5-39.5T800 144H648L540 36q-16-16-39.5-16T461 36L352 144H200q-23 0-39.5 16.5T144 200v152L36 460q-16 17-16 40t16 40l108 107v153q0 23 16.5 39.5T200 856h152l108 108q17 16 40 16t40-16l108-108h152q23 0 39.5-16.5T856 800V648l108-108q17-17 17-40t-17-40zM451 676q-10 12-26 12t-26-12L299 576l53-53 73 74 224-224 53 53z"
    />
  </svg>
);

export default SvgVerifiedFill;
