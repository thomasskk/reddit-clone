import * as React from "react";
import { SVGProps } from "react";

const SvgCommunity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 19q-131 0-243 65-109 64-173 173-65 112-65 243t65 243q64 109 173 173 112 65 243 65t243-65q109-64 173-173 65-112 65-243t-66-243Q852 148 743 85 631 19 500 19zm0 900q-89 0-169-35.5T191.5 784t-88-148-21-171.5 49-164.5T243 169t155-75 171.5-6.5T730 150L471 778h67l244-587q63 57 98.5 134T919 487t-28 164.5T800.5 792t-137 94T500 919zm34-526 33-78q-11-5-23-7-17-4-35-3-38-1-73 14-29 13-50 37h-2v-46h-78v365h81V465q0-23 12-43t33-30q23-12 49-11 28-1 53 12z"
    />
  </svg>
);

export default SvgCommunity;
