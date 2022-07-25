import * as React from "react";
import { SVGProps } from "react";

const SvgVideoCameraFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1012 1000" {...props}>
    <path
      fill="currentColor"
      d="M260 175h450V75H260q-42 0-76.5 19.5t-54 54T110 225h100q0-22 15-36t35-14zm715 185q-15-15-40-15H815q-10 0-30 10l-95 65v-70q0-23-16-39t-39-16H85q-22 0-38.5 16T30 350v500q0 23 16 39t39 16h550q23 0 39-16t16-39v-65l95 65q20 10 30 10h120q25 0 40-15t15-40V400q4-11 0-22t-15-18z"
    />
  </svg>
);

export default SvgVideoCameraFill;
