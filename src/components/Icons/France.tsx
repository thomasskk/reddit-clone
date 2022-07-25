import * as React from "react";
import { SVGProps } from "react";

const SvgFrance = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={2500}
    height={1479}
    viewBox="0 0 216.504 128.088"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#fff"
      d="M216.252 127.836V.252h-216v127.584h216z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#27569f"
      d="M71.748 127.836V.252H.252v127.584h71.496z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#cc2136"
      d="M216.252 127.836V.252h-71.496v127.584h71.496z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={0.504}
      strokeMiterlimit={2.613}
      d="M216.252 127.836V.252h-216v127.584h216z"
    />
  </svg>
);

export default SvgFrance;
