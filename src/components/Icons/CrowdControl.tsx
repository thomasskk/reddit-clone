import * as React from "react";
import { SVGProps } from "react";

const SvgCrowdControl = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M900 744H798L595 113q-10-31-36.5-50T500 44t-58.5 19-36.5 50L202 744H100q-23 0-39.5 16.5T44 800v100q0 23 16.5 39.5T100 956h800q23 0 39.5-16.5T956 900V800q0-23-16.5-39.5T900 744zM631 428l5 16H364l28-88h215zm25 78 28 88H316l28-88h312zM296 656h408l28 88H268zm168-524q4-11 14-18.5t22-7.5 22 7.5 14 18.5l52 162H413zm430 762H106v-88h788v88z"
    />
  </svg>
);

export default SvgCrowdControl;
