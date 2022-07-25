import * as React from "react";
import { SVGProps } from "react";

const SvgModUnmute = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M775 44H225q-49 0-90.5 24.5t-66 66T44 225v400q0 49 24.5 90.5t66 66T225 806h119v113q0 17 9 31t24 21q11 5 23 5 22 0 37-15l175-155h163q49 0 90.5-24.5t66-66T956 625V225q0-49-24.5-90.5t-66-66T775 44zm119 581q0 32-16 59.5T834.5 728 775 744H588L406 905V744H225q-32 0-59.5-16T122 684.5 106 625V225q0-32 16-59.5t43.5-43.5 59.5-16h550q32 0 59.5 16t43.5 43.5 16 59.5v400zM450 506l-78-78-44 44 100 100q9 9 22 9t22-9l250-250-44-44z"
    />
  </svg>
);

export default SvgModUnmute;
