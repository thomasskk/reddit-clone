import * as React from "react";
import { SVGProps } from "react";

const SvgExternalLink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M792 825q0 28-20 48.5T723 894H173q-28 0-48.5-20.5T104 825V275q0-28 20.5-48.5T173 206h183v-62H173q-35 0-65.5 17.5t-48 47.5T42 275v550q0 36 17.5 66t48 47.5T173 956h550q36 0 66-17.5t47.5-47.5 17.5-66V645h-62v180zM925 44H675v62h175L428 528l44 44 422-422v175h62V75q0-13-9-22t-22-9z"
    />
  </svg>
);

export default SvgExternalLink;
