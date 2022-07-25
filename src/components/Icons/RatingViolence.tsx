import * as React from "react";
import { SVGProps } from "react";

const SvgRatingViolence = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M725 956H275q-63 0-116-31t-84-84-31-116V275q0-63 31-116t84-84 116-31h450q63 0 116 31t84 84 31 116v450q0 63-31 116t-84 84-116 31zM275 106q-46 0-84.5 23T129 190.5 106 275v450q0 46 23 84.5t61.5 61.5 84.5 23h450q46 0 84.5-23t61.5-61.5 23-84.5V275q0-46-23-84.5T809.5 129 725 106H275zm273 644h-93L247 246h122l79 211 51 141h3l50-141 78-211h123z"
    />
  </svg>
);

export default SvgRatingViolence;
