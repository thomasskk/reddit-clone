import * as React from "react";
import { SVGProps } from "react";

const SvgPollPostFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M350 450h600v100H350V450zm0-300h450v100H350V150zm0 600h250v100H350V750zM203 452q-1-27-25-41-21-11-58-11H44v195h86q32 0 54-14 27-17 27-48 0-15-9-27t-23-17q10-6 16.5-16t7.5-21zm-79 100H99V443h19q29 0 29 24-1 10-8 16.5t-17 5.5v6q13-2 22.5 6.5t9 21-9 20.5-20.5 8v1zm7 300q-21-2-34-18t-11-37q-2-20 11-36.5t34-18.5q12 0 23 6.5t16 17.5l47-21q-12-23-34-36t-48-13q-28 0-52 13t-38 37-14 51.5 14 51 38 37 52 13.5 51.5-14.5T221 845l-49-18q-6 12-17 18.5t-24 6.5zM91 100 25 295h56l22-65q21-68 24-79h1q4 18 45 144h57l-66-195H91z"
    />
  </svg>
);

export default SvgPollPostFill;
