import * as React from "react";
import { SVGProps } from "react";

const SvgClearFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 19q-131 0-243 65-109 64-173 173-65 112-65 243t65 243q64 109 173 173 112 65 243 65t243-65q109-64 173-173 65-112 65-243t-66-243Q852 148 743 85 631 19 500 19zm177 605-53 53-124-124-123 123-53-53 123-123-123-124 53-53 123 124 124-124 53 53-124 124z"
    />
  </svg>
);

export default SvgClearFill;
