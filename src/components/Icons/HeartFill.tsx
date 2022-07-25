import * as React from "react";
import { SVGProps } from "react";

const SvgHeartFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M755 94q-73-12-141.5 16T500 197q-36-47-88-74.5t-110.5-31-114 18.5-96 65T32 273.5 20 388q10 127 111 260 76 100 197 197 72 58 143 102 13 8 29 8t29-8q71-44 143-102 121-97 197-197 101-133 111-260 8-70-19.5-133.5T879 148 755 94z"
    />
  </svg>
);

export default SvgHeartFill;
