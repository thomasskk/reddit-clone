import * as React from "react";
import { SVGProps } from "react";

const SvgMessageFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m50 163 406 406q18 18 44 18t44-18l406-406 5 5q-3-31-26-52t-54-21l-747-1q-34-1-58 24-20 20-23 48zm547 459q-19 20-44.5 30.5T500 663t-52.5-10.5T403 622L46 266v559q0 34 24 57.5t57 23.5h748q34 0 57.5-23.5T956 825V264z"
    />
  </svg>
);

export default SvgMessageFill;
