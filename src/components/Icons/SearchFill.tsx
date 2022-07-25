import * as React from "react";
import { SVGProps } from "react";

const SvgSearchFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 0 1012 1000" {...props}>
    <path
      fill="currentColor"
      d="M985 915 760 690q71-91 87-206 16-111-24-215-42-108-133-179T484 3Q373-13 269 27 161 69 90 160T3 366q-16 111 24 215 42 108 133 179 77 59 171 79.5t188 0T690 760l225 225zM425 750q-89 0-164-44-74-43-117-117-44-75-44-164t44-164q43-74 117-117 75-44 164-44t164 44q74 43 117 117 44 75 44 164t-44 164q-43 74-117 117-75 44-164 44z"
    />
  </svg>
);

export default SvgSearchFill;
