import * as React from "react";
import { SVGProps } from "react";

const SvgRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 19q-131 0-243 65-109 64-173 173-65 112-65 243t65 243q64 109 173 173 112 65 243 65t243-65q109-64 173-173 65-112 65-243t-66-243Q852 148 743 85 631 19 500 19zM81 500q0-75 26.5-145.5T183 227l590 590q-61 53-137 79t-156.5 22.5T325 881t-129-92.5-85-133T81 500zm736 273L227 183q82-71 187-94 103-22 204 7 103 30 179.5 106.5T904 383q29 100 7 203-23 105-94 187z"
    />
  </svg>
);

export default SvgRemove;
