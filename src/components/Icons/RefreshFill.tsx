import * as React from "react";
import { SVGProps } from "react";

const SvgRefreshFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M800 500q0 81-41 151-40 68-108 108-70 41-151 41t-151-41q-68-40-108-108-41-70-41-151t41-151q40-68 108-108 70-41 151-41h75v64q0 9 4.5 16.5T591 291t14 3q11 0 19-7l142-118q9-7 9-19t-9-19L624 13q-7-6-15.5-7T592 8.5t-12.5 11T575 36v64h-75q-109 0-202 55-90 53-143 143-55 93-55 202t55 202q53 90 143 143 93 55 202 55t202-55q90-53 143-143 55-93 55-202H800z"
    />
  </svg>
);

export default SvgRefreshFill;
