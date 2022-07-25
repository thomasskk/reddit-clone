import * as React from "react";
import { SVGProps } from "react";

const SvgTopicStyleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M900 319H750v-69q0-68-33.5-125.5t-91-91T500 0 374.5 33.5t-91 91T250 250v69H100q-13 0-22 9t-9 22v500q0 36 17.5 66t47.5 47.5 66 17.5h600q36 0 66-17.5t47.5-47.5 17.5-66V350q0-13-9-22t-22-9zm-550-69q0-41 20-75.5t54.5-54.5 75.5-20 75.5 20 54.5 54.5 20 75.5v69H350v-69z"
    />
  </svg>
);

export default SvgTopicStyleFill;
