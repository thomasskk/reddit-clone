import * as React from "react";
import { SVGProps } from "react";

const SvgNotificationFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M450 900h-50q0 41 29.5 70.5T500 1000t70.5-29.5T600 900H450zm418-351q-28-19-44-49t-16-64l-1-82q0-83-41-155-41-70-111-110-71-42-155-42T345 89q-70 40-111 110-41 72-42 155v82q0 34-16 64t-44 49q-42 28-65 72t-23 94v34q0 23 16.5 39.5T100 805h800q23 0 39.5-16.5T956 749v-34q0-50-23-94t-65-72z"
    />
  </svg>
);

export default SvgNotificationFill;
