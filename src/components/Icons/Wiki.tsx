import * as React from "react";
import { SVGProps } from "react";

const SvgWiki = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M850 44H225q-36 0-66 17.5T111.5 109 94 175v662q0 33 16 60t43 43 60 16h637q23 0 39.5-16.5T906 900V100q0-23-16.5-39.5T850 44zm-6 850H213q-24 0-40.5-16.5t-16.5-40 16.5-40T212 781h632v113zM213 719q-31 0-57 15V175q0-28 20.5-48.5T225 106h619v613H213z"
    />
  </svg>
);

export default SvgWiki;
