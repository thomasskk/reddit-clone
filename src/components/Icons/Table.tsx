import * as React from "react";
import { SVGProps } from "react";

const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M827 94H175q-34 0-57.5 24T94 176v649q0 34 23.5 57.5T175 906h652q33 0 57-23.5t24-57.5V176q0-34-24-58t-58-24h1zm18 82v168H531V157h296q7 0 12.5 5.5T845 176zM531 406h314v188H531V406zm-62 188H156V406h313v188zM175 157h294v187H156V176q0-8 5.5-13.5T175 157zm-19 668V656h313v188H175q-8 0-13.5-5.5T156 825zm671 19H531V656h314v169q0 8-5.5 13.5T827 844z"
    />
  </svg>
);

export default SvgTable;
