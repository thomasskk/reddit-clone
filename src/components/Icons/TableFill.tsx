import * as React from "react";
import { SVGProps } from "react";

const SvgTableFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M850 75H150q-41 0-70.5 29.5T50 175v650q0 41 29.5 70.5T150 925h700q41 0 70.5-29.5T950 825V175q0-41-29.5-70.5T850 75zm0 250H550V175h300v150zM550 425h300v150H550V425zM450 575H150V425h300v150zm0-400v150H150V175h300zM150 675h300v150H150V675zm400 150V675h300v150H550z"
    />
  </svg>
);

export default SvgTableFill;
