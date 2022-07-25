import * as React from "react";
import { SVGProps } from "react";

const SvgTrophyFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1020 1000" {...props}>
    <path
      fill="currentColor"
      d="M1000 300q0-41-29.5-70.5T900 200h-94V100q0-23-16.5-39.5T750 44H250q-23 0-39.5 16.5T194 100v100h-94q-41 0-70.5 29.5T0 300q0 63 29.5 117.5t81 89T225 547q31 70 90.5 117.5T450 727v173H300v100h400V900H550V726q75-14 134.5-61.5T775 547q63-6 114.5-40.5t81-89T1000 300zm-900 0h94v105q0 17 2 35-43-17-69.5-55.5T100 300zm704 139q2-17 2-34V300h94q0 46-26.5 84.5T804 439z"
    />
  </svg>
);

export default SvgTrophyFill;
