import * as React from "react";
import { SVGProps } from "react";

const SvgUnpinFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1017 1000" {...props}>
    <path
      fill="currentColor"
      d="M997 384q0 11-4.5 21.5T980 424l-33 34q-25 23-58.5 28.5T825 476L724 578 422 276l102-101q-16-30-11-64t29-58l34-33q16-17 40-17 11 0 21.5 4.5T656 20l324 324q8 8 12.5 18.5T997 384zM80 124l234 234q-27-8-54-1t-48 26l-33 33q-8 9-12.5 19t-4.5 21.5 4.5 22T179 497l127 127L15 915l70 70 291-291 127 127q8 8 18.5 12.5T543 838q11 0 21.5-4.5T583 821l33-33q15-15 23-34t8-40q0-13-4-26l233 232 44-44L124 80z"
    />
  </svg>
);

export default SvgUnpinFill;
