import * as React from "react";
import { SVGProps } from "react";

const SvgNotificationOff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M450 900h-50q0 41 29.5 70.5T500 1000t70.5-29.5T600 900H450zm50-791q67 0 123 33t89 89.5T745 354v82q0 49 23.5 93t64.5 72q28 19 44.5 49t15.5 64v28h-5l48 49q20-17 20-42v-35q0-49-23.5-93T868 549q-28-19-44-49t-16-64l-1-82q1-93-51-170.5T617.5 70t-178-17.5T283 137l44 44q34-34 79-53t94-19zm472 819L72 28 28 72l182 182q-17 48-18 100l1 82q-1 34-17 64t-44 49q-42 28-65 72t-23 94v34q0 23 16.5 39.5T100 805h661l167 167zM106 742v-27q0-35 16-65t45-49q41-28 64.5-72t23.5-93v-82q0-25 6-49l437 437H106z"
    />
  </svg>
);

export default SvgNotificationOff;
