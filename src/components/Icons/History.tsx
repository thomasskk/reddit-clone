import * as React from "react";
import { SVGProps } from "react";

const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M678 722 469 513V200h62v287l191 191zM500 981q-131 0-243-65-109-64-173-173-65-112-65-243t65-243q64-109 173-173 112-65 243-65t243 65q109 64 173 173 65 112 65 243t-66 243q-63 109-172 172-112 66-243 66zm0-900q-114 0-211 57-95 56-151 151-57 97-57 211t57 211q56 95 151 151 97 57 211 57t211-57q95-56 151-151 57-97 57-211t-58-211q-55-95-150-150-97-58-211-58z"
    />
  </svg>
);

export default SvgHistory;
