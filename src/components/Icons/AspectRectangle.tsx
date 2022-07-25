import * as React from "react";
import { SVGProps } from "react";

const SvgAspectRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M106 400H44V200q0-23 16.5-39.5T100 144h200v62H106v194zm194 456H100q-23 0-39.5-16.5T44 800V600h62v194h194v62zm600 0H700v-62h194V600h62v200q0 23-16.5 39.5T900 856zm56-456h-62V206H700v-62h200q23 0 39.5 16.5T956 200v200z"
    />
  </svg>
);

export default SvgAspectRectangle;
