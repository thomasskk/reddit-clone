import * as React from "react";
import { SVGProps } from "react";

const SvgJoined = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 980q-130 0-242-66-109-63-172-172-66-112-66-242t66-242q63-109 172-172 112-66 242-66t242 66q109 63 172 172 66 112 66 242t-66 242q-63 109-172 172-112 66-242 66zm0-900q-113 0-211 58-95 56-151 151-58 98-58 211t58 211q56 95 151 151 98 58 211 58t211-58q95-56 151-151 58-98 58-211t-58-211q-56-95-151-151-98-58-211-58zm-75 575h-15l-10-10-95-100 40-40 80 75 230-225 40 40-255 260h-15z"
    />
  </svg>
);

export default SvgJoined;
