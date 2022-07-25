import * as React from "react";
import { SVGProps } from "react";

const SvgTopicHealthFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M200 1h600v100H200V1zm450 168H350q-63 0-116 31t-84 84-31 116v350q0 63 31 116t84 84 116 31h300q63 0 116-31t84-84 31-116V400q0-63-31-116t-84-84-116-31zm-12 418H538v100h-75V587H363v-75h100V412h75v100h100v75z"
    />
  </svg>
);

export default SvgTopicHealthFill;
