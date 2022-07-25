import * as React from "react";
import { SVGProps } from "react";

const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M450 900h-50q0 41 29.5 70.5T500 1000t70.5-29.5T600 900H450zm418-351q-28-19-44-49t-16-64l-1-82q0-83-41-155-41-70-111-110-71-42-155-42T345 89q-70 40-111 110-41 72-42 155v82q0 34-16 64t-44 49q-42 28-65 72t-23 94v34q0 23 16.5 39.5T100 805h800q23 0 39.5-16.5T956 749v-34q0-50-23-94t-65-72zm26 193H106v-27q0-35 16-65t45-49q41-28 64.5-72t23.5-93v-82q0-66 33-122.5t89-89.5 122.5-33 123 33 89.5 89.5T745 354v82q0 49 23.5 93t64.5 72q28 19 44 49t16 64z"
    />
  </svg>
);

export default SvgNotification;
