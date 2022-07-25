import * as React from "react";
import { SVGProps } from "react";

const SvgConversion1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M961 115q0-34-24-57.5T879 34H121q-34 0-58 23.5T39 115v150q0 6 3 12 3 16 12 30l258 321v257q0 34 24 57.5t57 23.5h214q33 0 57-23.5t24-57.5V628l260-323q12-18 13-40V115zm-859 0q0-8 5.5-13.5T121 96h758q8 0 13.5 5.5T898 115v118H102V115zm523 770q0 8-5.5 13.5T607 904H393q-7 0-12.5-5.5T375 885V648h250v237zm17-299H358L125 296h750z"
    />
  </svg>
);

export default SvgConversion1;
