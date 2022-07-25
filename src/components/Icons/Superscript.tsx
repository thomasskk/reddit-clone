import * as React from "react";
import { SVGProps } from "react";

const SvgSuperscript = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M790 100h-30L635 350h55l85-169 85 169h55zm-430 5L26 910h104l87-213h366l87 213h103L440 105h-80zM252 608l145-368h5l146 368H252z"
    />
  </svg>
);

export default SvgSuperscript;
