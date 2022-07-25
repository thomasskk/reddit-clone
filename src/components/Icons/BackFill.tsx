import * as React from "react";
import { SVGProps } from "react";

const SvgBackFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M950 450H196L560 85l-70-70L40 465q-15 14-15 35t15 35l450 450 70-70-364-365h754V450z"
    />
  </svg>
);

export default SvgBackFill;
