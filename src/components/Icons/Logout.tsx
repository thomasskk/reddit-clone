import * as React from "react";
import { SVGProps } from "react";

const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m503 628 44 44 150-150q9-9 9-22t-9-22L547 328l-44 44 97 97H50v62h550zM825 44H325q-36 0-66 17.5T211.5 109 194 175v42h62v-42q0-28 20.5-48.5T325 106h500q28 0 48.5 20.5T894 175v650q0 28-20.5 48.5T825 894H325q-28 0-48.5-20.5T256 825v-42h-62v42q0 36 17.5 66t47.5 47.5 66 17.5h500q36 0 66-17.5t47.5-47.5 17.5-66V175q0-36-17.5-66T891 61.5 825 44z"
    />
  </svg>
);

export default SvgLogout;
