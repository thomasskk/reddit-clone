import * as React from "react";
import { SVGProps } from "react";

const SvgDuplicate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M900 44H400q-23 0-39.5 16.5T344 100v500q0 23 16.5 39.5T400 656h500q23 0 39.5-16.5T956 600V100q0-23-16.5-39.5T900 44zm-6 550H406V106h488v488zM594 894H106V406h169v-62H100q-23 0-39.5 16.5T44 400v500q0 23 16.5 39.5T100 956h500q23 0 39.5-16.5T656 900V725h-62v169z"
    />
  </svg>
);

export default SvgDuplicate;
