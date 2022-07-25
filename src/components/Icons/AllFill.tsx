import * as React from "react";
import { SVGProps } from "react";

const SvgAllFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 19q-131 0-243 65-109 64-173 173-65 112-65 243t65 243q64 109 173 173 112 65 243 65t243-65q109-64 173-173 65-112 65-243t-66-243Q852 148 743 85 631 19 500 19zM375 900q-53-17-100-47V700h100v200zm400-600v515q-45 40-100 65V300h100zM469 917V500h100v412q-34 7-69 7-10 0-29-2h-2z"
    />
  </svg>
);

export default SvgAllFill;
