import * as React from "react";
import { SVGProps } from "react";

const SvgUndoFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 100h-75V36q0-9-4.5-16.5T408 8.5 391.5 6 376 13L234 131q-9 7-9 19t9 19l142 118q8 7 19 7 7 0 14-3t11.5-10.5T425 264v-64h75q81 0 151 41 68 40 108 108 41 70 41 151t-41 151q-40 68-108 108-70 41-151 41t-151-41q-68-40-108-108-41-70-41-151H100q0 109 55 202 53 90 143 143 93 55 202 55t202-55q90-53 143-143 55-93 55-202t-55-202q-53-90-143-143-93-55-202-55z"
    />
  </svg>
);

export default SvgUndoFill;
