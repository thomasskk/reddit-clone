import * as React from "react";
import { SVGProps } from "react";

const SvgVideoPost = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M694 470 400 280q-9-5-18.5-5.5t-18.5 4-14 13-5 18.5v380q0 10 5 18.5t13.5 13.5 18.5 4.5 19-6.5l294-190q15-11 16-30-1-19-16-30zM406 642V358l220 142zm552-406q-7-41-35.5-72.5T853 120Q680 74 500.5 74T147 120q-41 11-69.5 43T42 237q-47 263 0 527 7 41 35.5 72.5T147 880q173 46 353 46t353-46q41-12 69.5-43.5T958 763q23-130 23-263t-23-263v-1zm-61 517q-4 24-20.5 42T837 820q-166 44-337 44t-337-44q-23-7-39.5-25T103 753q-45-253 0-505 4-24 20.5-42.5T163 180q166-44 337-44t337 44q23 7 39.5 25.5T897 248q22 125 22 252t-22 253z"
    />
  </svg>
);

export default SvgVideoPost;
