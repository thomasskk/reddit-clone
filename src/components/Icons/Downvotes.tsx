import * as React from "react";
import { SVGProps } from "react";

const SvgDownvotes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1012 1000" {...props}>
    <path
      fill="currentColor"
      d="m456 537-62-73v156h133l-53-63h-18v-20zm86 100L325 890 93 620h163V370h57l-54-63h-9q-23 0-39.5 16.5T194 363v194H52q-13 0-23.5 7t-16 18.5T9 607t10 22l263 308q17 19 43 19t43-19l215-252zm133 19q-26 0-43-19L369 329q-8-9-10-22t3.5-24.5 16-18.5 23.5-7h142V63q0-23 16.5-39.5T600 7h150q23 0 39.5 16.5T806 63v194h142q13 0 23.5 7t16 18.5T991 307t-10 22L718 637q-17 19-43 19zM443 320l232 270 232-270H744V70H606v250H443z"
    />
  </svg>
);

export default SvgDownvotes;
