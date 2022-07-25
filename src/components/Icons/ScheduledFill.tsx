import * as React from "react";
import { SVGProps } from "react";

const SvgScheduledFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M956 387V200q0-23-16.5-39.5T900 144H800V50H700v94H300V50H200v94H100q-23 0-39.5 16.5T44 200v187h912zM44 462v388q0 23 16.5 39.5T100 906h800q23 0 39.5-16.5T956 850V462H44z"
    />
  </svg>
);

export default SvgScheduledFill;
