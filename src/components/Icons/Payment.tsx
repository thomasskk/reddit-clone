import * as React from "react";
import { SVGProps } from "react";

const SvgPayment = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M850 94H150q-36 0-66 17.5T36.5 159 19 225v550q0 36 17.5 66T84 888.5t66 17.5h700q36 0 66-17.5t47.5-47.5 17.5-66V225q0-36-17.5-66T916 111.5 850 94zm69 681q0 28-20.5 48.5T850 844H150q-28 0-48.5-20.5T81 775V225q0-28 20.5-48.5T150 156h700q28 0 48.5 20.5T919 225v550zM144 506h212V294H144v212zm62-150h88v88h-88v-88zm-56 288h200v62H150v-62zm250 0h200v62H400v-62zm250 0h200v62H650v-62z"
    />
  </svg>
);

export default SvgPayment;
