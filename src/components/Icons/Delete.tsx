import * as React from "react";
import { SVGProps } from "react";

const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M777 831q-2 27-22 45t-46 18H291q-26 0-46-18t-22-44l-38-507h-63l39 512q2 33 20.5 60.5t47.5 43 62 15.5h418q33 0 62-15.5t47.5-43T839 836l39-511h-63zm-96-637v-19q0-36-17.5-66T616 61.5 550 44H450q-36 0-66 17.5T336.5 109 319 175v19H100v62h800v-62H681zm-62 0H381v-19q0-28 20.5-48.5T450 106h100q28 0 48.5 20.5T619 175v19z"
    />
  </svg>
);

export default SvgDelete;
