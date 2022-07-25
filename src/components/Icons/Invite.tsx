import * as React from "react";
import { SVGProps } from "react";

const SvgInvite = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M882 978H82q-23 0-39.5-16.5T26 922v-25q0-90 45-167 44-75 119-119 77-45 167-45h250q90 0 167 45 75 44 119 119 46 77 46 167v25q0 23-16.5 39.5T882 978zM89 916h787v-19q0-73-36-134.5t-98-98T607 628H357q-73 0-134.5 36.5t-97.5 98T89 897v19zm573-582h-23q-20 50-65 79.5T475 441t-97-35.5-58.5-85 2-102.5 61.5-82.5 98-32 98 30.5h83v-6q-34-42-81.5-64T481 42 381 65t-80.5 64-44 92.5.5 103 45 92.5 80 63.5T482 503t100-23 80-64v-82zm312-131H793V22h-63v181H550v62h180v181h63V265h181v-62z"
    />
  </svg>
);

export default SvgInvite;
