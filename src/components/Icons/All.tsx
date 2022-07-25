import * as React from "react";
import { SVGProps } from "react";

const SvgAll = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 19q-131 0-243 65-109 64-173 173-65 112-65 243t65 243q64 109 173 173 112 65 243 65t243-65q109-64 173-173 65-112 65-243t-66-243Q852 148 743 85 631 19 500 19zm256 811V300h-62v571q-68 35-143 44V500h-63v418q-68-2-132-25V700h-62v164q-80-45-133-118T89.5 585 91 407.5t74.5-161 133.5-115 170.5-50 176 25T794 201t97 148.5T918 525t-48 170-114 135z"
    />
  </svg>
);

export default SvgAll;
