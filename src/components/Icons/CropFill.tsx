import * as React from "react";
import { SVGProps } from "react";

const SvgCropFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M950 700H300V400H200v325q0 31 22 53t53 22h425v150h100V800h150V700zM700 600h100V275q0-31-22-53t-53-22H300V50H200v150H50v100h650v300z"
    />
  </svg>
);

export default SvgCropFill;
