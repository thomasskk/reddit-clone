import * as React from "react";
import { SVGProps } from "react";

const SvgCsv = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 91H175q-34 0-57.5 23.5T94 172v650q0 33 23.5 57t57.5 24h650q34 0 57.5-24t23.5-57V172q0-34-23.5-57.5T825 91zm19 81v222H387V153h438q8 0 13.5 5.5T844 172zm-669-19h149v241H156V172q0-8 5.5-13.5T175 153zm-19 669V456h168v385H175q-8 0-13.5-5.5T156 822zm669 19H387V456h457v366q0 8-5.5 13.5T825 841z"
    />
  </svg>
);

export default SvgCsv;
