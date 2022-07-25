import * as React from "react";
import { SVGProps } from "react";

const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 431q40 0 75-19t56.5-52.5 24.5-74-14-76.5-49-59.5-72-29-77 9-63 44.5-34 70H50v62h622q11 55 54 90t99 35zm0-250q39 0 66.5 27.5T919 275t-27.5 66.5T825 369t-66.5-27.5T731 275t27.5-66.5T825 181zM175 569q-40 0-75 19t-56.5 52.5-24.5 74T33 791t49 59.5 72 29 77-9 63-44.5 34-70h622v-62H328q-11-55-54-90t-99-35zm0 250q-39 0-66.5-27.5T81 725t27.5-66.5T175 631t66.5 27.5T269 725t-27.5 66.5T175 819z"
    />
  </svg>
);

export default SvgFilter;
