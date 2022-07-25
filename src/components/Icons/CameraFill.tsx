import * as React from "react";
import { SVGProps } from "react";

const SvgCameraFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M943 186q-18-19-42.5-29T850 147H741l-58-80q-8-11-20-17t-26-6H363q-14 0-26 6t-20 17l-58 80H150q-36 0-66 17.5t-47.5 48T19 278v497q0 36 17.5 66T84 888.5t66 17.5h698q36 0 66-17.5t47.5-47.5 18.5-66l1-496q0-27-10-51t-28-42zM500 700q-54 0-100-27t-73-73-27-100 27-100 73-73 100-27 100 27 73 73 27 100-27 100-73 73-100 27z"
    />
  </svg>
);

export default SvgCameraFill;
