import * as React from "react";
import { SVGProps } from "react";

const SvgVerified = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M964 460 856 352V200q0-23-16.5-39.5T800 144H648L540 36q-16-16-39.5-16T461 36L352 144H200q-23 0-39.5 16.5T144 200v152L36 460q-16 17-16 40t16 40l108 107v153q0 23 16.5 39.5T200 856h152l108 108q17 16 40 16t40-16l108-108h152q23 0 39.5-16.5T856 800V648l108-108q17-17 17-40t-17-40zM804 611l-10 13v170H637l-17 1-120 120-111-111-13-10H206V637l-1-17L85 500l111-111 10-13V206h157l17-1L500 85l111 111 13 10h170v157l1 17 120 120zm-379-5-78-78-44 44 100 100q9 9 22 9t22-9l250-250-44-44z"
    />
  </svg>
);

export default SvgVerified;
