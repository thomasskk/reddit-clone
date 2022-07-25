import * as React from "react";
import { SVGProps } from "react";

const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M819 500q0 87-44 161-42 72-114 114-74 44-161 44t-161-44q-72-42-114-114-44-74-44-161t44-161q42-72 114-114 74-44 161-44h164l-84 70 40 48 150-125q11-9 11-24t-11-24L620 1l-40 48 84 70H500q-76 0-146 29t-123.5 82.5-82.5 124-29 146T147.5 646t83 124 124 82.5 145.5 29 146.5-29 123.5-83T852 646t29-146h-62zM701 150l-1 1v-2z"
    />
  </svg>
);

export default SvgRefresh;
