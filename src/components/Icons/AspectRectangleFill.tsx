import * as React from "react";
import { SVGProps } from "react";

const SvgAspectRectangleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M150 400H50V225q0-31 22-53t53-22h175v100H150v150zm150 450H125q-31 0-53-22t-22-53V600h100v150h150v100zm575 0H700V750h150V600h100v175q0 31-22 53t-53 22zm75-450H850V250H700V150h175q31 0 53 22t22 53v175z"
    />
  </svg>
);

export default SvgAspectRectangleFill;
