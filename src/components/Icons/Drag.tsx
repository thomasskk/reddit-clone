import * as React from "react";
import { SVGProps } from "react";

const SvgDrag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M263 150q0 26 18 44.5t44 18 44.5-18.5 18.5-44-18.5-44.5-44.5-18-44 18.5-18 44zm350 0q0 26 18 44.5t44 18 44.5-18.5 18-44-18.5-44.5-44-18-44 18.5-18 44zM263 500q0 26 18 44t44 18 44-18 18.5-44-18-44.5-44.5-18-44 18.5-18 44zm350 0q0 26 18 44.5t44 18 44.5-18.5 18-44-18.5-44.5-44-18-44 18.5-18 44zM263 850q0 26 18 44t44 18.5 44.5-18T388 850t-18.5-44.5T325 787t-44 18.5-18 44.5zm350 0q0 26 18 44t44 18.5 44.5-18T738 850t-18.5-44.5T675 787t-44 18.5-18 44.5z"
    />
  </svg>
);

export default SvgDrag;
