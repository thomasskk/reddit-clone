import * as React from "react";
import { SVGProps } from "react";

const SvgTagFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 44H551q-35 0-59 25L37 539q-23 24-23 57t24 57l309 310q24 23 57 23.5t57-22.5l470-455q25-24 25-59V125q0-34-23.5-57.5T875 44zM704 396q-30 0-55-17t-37-45-6-58 27.5-51 51.5-27 58 5.5 44.5 36.5 16.5 56q0 41-29 70.5T704 396z"
    />
  </svg>
);

export default SvgTagFill;
