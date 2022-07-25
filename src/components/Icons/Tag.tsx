import * as React from "react";
import { SVGProps } from "react";

const SvgTag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 44H551q-35 0-59 25L37 539q-23 24-23 57t24 57l309 310q24 23 57 23.5t57-22.5l470-455q25-24 25-59V125q0-34-23.5-57.5T875 44zm19 406q0 7-6 13L418 918q-5 6-13 6t-13-6L82 608q-5-5-5-12.5t5-13.5l455-470q6-6 14-6h324q8 0 13.5 5.5T894 125v325zM650 275q0 31 22 53t53 22 53-22 22-53-22-53-53-22-53 22-22 53z"
    />
  </svg>
);

export default SvgTag;
