import * as React from "react";
import { SVGProps } from "react";

const SvgPrivacy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M650 19q-90 0-167 45-75 44-119 119-45 77-45 167 0 60 21 116L19 787v194h262V831h150V681h219q90 0 167-45 75-44 119-119 45-77 45-167t-45-167q-44-75-119-119-77-45-167-45zm0 600H369v150H219v150H81V813l333-333-9-20q-24-53-23.5-111T406 238t68.5-91.5T575 92t113.5-8 107 40 81 81.5 39.5 107-8.5 114-55 100-91 68T650 619zm-31-319q0 34 23.5 57.5T700 381t57.5-23.5T781 300t-23.5-57.5T700 219t-57.5 23.5T619 300z"
    />
  </svg>
);

export default SvgPrivacy;
