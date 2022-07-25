import * as React from "react";
import { SVGProps } from "react";

const SvgQuarantinedFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M917 336 664 83q-45-45-104.5-60.5t-119 0T336 83L83 336q-45 45-60.5 104.5t0 119T83 664l254 253q44 45 103.5 60.5t119 0T664 917l253-253q45-45 60.5-104.5t0-119T917 336zM569 500q0 28-20.5 48.5T500 569t-48.5-20.5T431 500t20.5-48.5T500 431t48.5 20.5T569 500zm-350 0q0-75 37.5-140.5T359 257l28-16 77 133q-34 10-58 34t-33 57 0 66H219v-31zm422 243q-66 38-141 38t-141-38l-27-15 77-134q25 25 58 33.5t66 0 58-33.5l77 134zm140-212H627q9-33 0-66t-33-57-58-34l78-133 27 16q65 37 102.5 102.5T781 500v31z"
    />
  </svg>
);

export default SvgQuarantinedFill;
