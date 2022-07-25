import * as React from "react";
import { SVGProps } from "react";

const SvgVolumeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1020 1000" {...props}>
    <path
      fill="currentColor"
      d="M527 25q-14-7-30-5.5T468 31L189 244H99q-23 0-39.5 16.5T43 300v400q0 23 16.5 39.5T100 756h90l278 213q15 12 34 12 24 0 40.5-16.5T559 924V76q0-17-8.5-30.5T527 25zm123 125v100q68 0 125.5 33.5t91 91T900 500t-33.5 125.5-91 91T650 750v100q95 0 177-48 79-46 125-125 48-82 48-177t-48-177q-46-79-125-125-82-48-177-48zm175 350q0-48-23.5-88T738 348.5 650 325v100q31 0 53 22t22 53-22 53-53 22v100q48 0 88-23.5t63.5-63.5 23.5-88z"
    />
  </svg>
);

export default SvgVolumeFill;
