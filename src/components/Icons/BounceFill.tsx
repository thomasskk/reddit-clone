import * as React from "react";
import { SVGProps } from "react";

const SvgBounceFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M978 737q-4-8-11.5-13t-16.5-5h-75V400q0-102-51-189-50-85-135-135-87-51-189-51T311 76q-85 50-135 135-51 87-51 189v319H50q-9 0-16.5 5T22 737t-3 17 7 16l125 150q9 11 24 11t24-11l125-150q6-7 7-16t-3-17-11.5-13-16.5-5h-75V400q0-75 37-138t100-100 138-37 138 37 100 100 37 138v319h-75q-9 0-16.5 5T672 737t-3 17 7 16l125 150q9 11 24 11t24-11l125-150q6-7 7-16t-3-17z"
    />
  </svg>
);

export default SvgBounceFill;
