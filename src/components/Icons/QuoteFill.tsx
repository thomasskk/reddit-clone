import * as React from "react";
import { SVGProps } from "react";

const SvgQuoteFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M420 579q-49 75-113 137L195 822l-81-88 102-95 30-26q22-20 42-43 18-21 33-44-16 5-33 4-42 0-79.5-21.5T148 450q-24-40-24-86.5t24-85 64-59.5 86-21 87 24 62 67q26 52 24 110 1 48-12 94t-39 86zm418 0q-49 75-113 137L613 822l-80-88 101-95 30-26q22-20 43-43 18-21 32-44-16 5-32 4-43 0-80.5-21.5T566 450q-24-40-24-86.5t24.5-85T631 219t86-21 86.5 24 62.5 67q25 52 23 110 1 48-12 94t-39 86z"
    />
  </svg>
);

export default SvgQuoteFill;
