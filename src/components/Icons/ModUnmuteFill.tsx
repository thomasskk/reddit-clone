import * as React from "react";
import { SVGProps } from "react";

const SvgModUnmuteFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M775 44H225q-49 0-90.5 24.5t-66 66T44 225v400q0 49 24.5 90.5t66 66T225 806h119v113q0 17 9 31t24 21q11 5 23 5 22 0 37-15l175-155h163q49 0 90.5-24.5t66-66T956 625V225q0-49-24.5-90.5t-66-66T775 44zM476 576q-10 12-26 12t-26-12L324 476l53-53 73 74 224-224 53 53z"
    />
  </svg>
);

export default SvgModUnmuteFill;
