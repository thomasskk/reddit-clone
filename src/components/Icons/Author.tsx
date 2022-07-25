import * as React from "react";
import { SVGProps } from "react";

const SvgAuthor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M750 19q-63 0-116 31t-84 84-31 116q0 14 2 27l-4-4q-18-18-43.5-16T432 279L42 800q-19 25-22 57t11.5 60.5 42 45.5 59.5 17q37 0 67-22l521-390q20-16 22-41.5T727 483l-4-5q13 3 27 3 63 0 116-31t84-84 31-116-31-116-84-84-116-31zM163 908q-15 11-34 9.5T97 903t-14.5-32 9.5-34l386-514 199 199zm587-489q-46 0-84.5-23T604 334.5 581 250t23-84.5 61.5-61.5T750 81t84.5 23 61.5 61.5 23 84.5-23 84.5-61.5 61.5-84.5 23zM403 553l100-100 44 44-100 100z"
    />
  </svg>
);

export default SvgAuthor;
