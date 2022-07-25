import * as React from "react";
import { SVGProps } from "react";

const SvgTopicReading = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M950 62H600q-28 1-54.5 12T500 106q-19-21-45.5-32T400 63H50q-16 0-26.5 10.5T12 100v700q1 16 11.5 26.5T50 837h350q16 0 27-10.5t10.5-26.5-11-27-26.5-11H88V137h312q26 1 44 19t18 44v500q1 16 11.5 26.5T500 737t27-10.5 11-26.5V200q0-26 18-44t44-18h313v624H600q-37 1-68.5 19.5t-50 50T463 900q0 16 10.5 26.5T500 937t27-10.5 11-26.5q0-26 18-44t44-18h350q16-1 27-11.5t11-26.5V100q0-16-11-27t-27-11z"
    />
  </svg>
);

export default SvgTopicReading;
