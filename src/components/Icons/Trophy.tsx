import * as React from "react";
import { SVGProps } from "react";

const SvgTrophy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M981 275q0-34-23.5-57.5T900 194h-94v-94q0-23-16.5-39.5T750 44H250q-23 0-39.5 16.5T194 100v94h-94q-34 0-57.5 23.5T19 275q0 55 24.5 103.5t67.5 81 97 42.5q25 91 96 153t165 75v164H300v62h400v-62H531V730q94-13 165-75t96-153q54-10 97-42.5t67.5-81T981 275zm-900 0q0-8 5.5-13.5T100 256h94v149q0 12 1 29-51-17-82.5-61T81 275zm663 130q2 69-30 128.5t-88.5 96T500 669q-69-3-125.5-39.5t-88.5-96T256 405V106h488v299zm61 29q1-17 1-29V256h94q8 0 13.5 5.5T919 275q0 54-31.5 98T805 434z"
    />
  </svg>
);

export default SvgTrophy;
