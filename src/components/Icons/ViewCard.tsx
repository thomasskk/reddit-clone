import * as React from "react";
import { SVGProps } from "react";

const SvgViewCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M900 45H100q-23 0-39.5 16.5T44 102v797q0 24 16.5 40.5T100 956h800q23 0 39.5-16.5T956 899V102q0-24-16.5-40.5T900 45zm-6 848H106V531h788v362zM106 469V108h788v361H106z"
    />
  </svg>
);

export default SvgViewCard;
