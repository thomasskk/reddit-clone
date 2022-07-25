import * as React from "react";
import { SVGProps } from "react";

const SvgUndo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 119H336l84-70-40-48-150 125q-11 9-11 24t11 24l150 125 40-48-84-70h164q87 0 161 44 72 42 114 114 44 74 44 161t-44 161q-42 72-114 114-74 44-161 44t-161-44q-72-42-114-114-44-74-44-161h-62q0 104 52 192 50 87 137 137 88 52 192 52t192-52q87-50 137-137 52-88 52-192t-52-192q-50-87-137-137-88-52-192-52zm-201 31 1-1v2z"
    />
  </svg>
);

export default SvgUndo;
