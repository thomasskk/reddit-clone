import * as React from "react";
import { SVGProps } from "react";

const SvgCopyid = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M900 656H400q-23 0-39.5-16.5T344 600V100q0-23 16.5-39.5T400 44h500q23 0 39.5 16.5T956 100v500q0 23-16.5 39.5T900 656zm-494-62h488V106H406v488zm194 362H100q-23 0-39.5-16.5T44 900V400q0-23 16.5-39.5T100 344h175v62H106v488h488V725h62v175q0 23-16.5 39.5T600 956z"
    />
  </svg>
);

export default SvgCopyid;
