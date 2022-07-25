import * as React from "react";
import { SVGProps } from "react";

const SvgAddMedia = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M943 186q-18-19-42.5-29T850 147H741l-58-80q-8-11-20-17t-26-6H363q-14 0-26 6t-20 17l-58 80H150q-36 0-66 17.5t-47.5 48T19 278v497q0 36 17.5 66T84 888.5t66 17.5h698q36 0 66-17.5t47.5-47.5 18.5-66l1-496q0-27-10-51t-28-42zm-26 589q0 28-20 48t-49 21H150q-28 0-48.5-20.5T81 775V278q0-28 20.5-48.5T150 209h141l75-103h268l75 103h141q29 0 49 20.5t20 48.5zM531 300h-62v169H300v62h169v169h62V531h169v-62H531V300z"
    />
  </svg>
);

export default SvgAddMedia;
