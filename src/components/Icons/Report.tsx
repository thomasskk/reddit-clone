import * as React from "react";
import { SVGProps } from "react";

const SvgReport = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m939 102-19-9-15 7q-93 44-196 43T514 97Q407 44 287.5 44T61 97l-17 8v895h62V745q91-40 191-38t189 46q107 53 226.5 53T939 753l17-8V133q0-10-4.5-18T939 102zm-45 603q-91 40-191 38t-189-46q-96-47-202-52.5T106 677V145q91-40 191-38t189 46q96 47 202 52.5T894 173v532z"
    />
  </svg>
);

export default SvgReport;
