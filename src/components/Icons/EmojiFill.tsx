import * as React from "react";
import { SVGProps } from "react";

const SvgEmojiFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 19q-131 0-243 65-109 64-173 173-65 112-65 243t65 243q64 109 173 173 112 65 243 65t243-65q109-64 173-173 65-112 65-243t-66-243Q852 148 743 85 631 19 500 19zM225 450q0-31 22-53t53-22 53 22 22 53-22 53-53 22-53-22-22-53zm456 222q-32 42-80 65.5T500 760q-53 1-101-22.5T319 671l-21-30 61-43 22 30q21 28 52.5 43t66.5 15 66.5-15 52.5-43l22-30 61 43zm19-147q-31 0-53-22t-22-53 22-53 53-22 53 22 22 53-22 53-53 22z"
    />
  </svg>
);

export default SvgEmojiFill;
