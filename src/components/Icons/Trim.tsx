import * as React from "react";
import { SVGProps } from "react";

const SvgTrim = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M225 931q-42 0-78-21t-57-57-21-78 21-78 57-57 78-21 78 21 57 57 21 78-21 78-57 57-78 21zm0-250q-39 0-66.5 27.5T131 775t27.5 66.5T225 869t66.5-27.5T319 775t-27.5-66.5T225 681zm0-300q-42 0-78-21t-57-57-21-78 21-78 57-57 78-21 78 21 57 57 21 78-21 78-57 57-78 21zm0-250q-39 0-66.5 27.5T131 225t27.5 66.5T225 319t66.5-27.5T319 225t-27.5-66.5T225 131zm65 204 45-45 187 188-44 44zm566-235L290 665l45 45 609-610h-88zm88 800L597 553l-44 44 302 302z"
    />
  </svg>
);

export default SvgTrim;
