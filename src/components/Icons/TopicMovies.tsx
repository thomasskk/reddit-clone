import * as React from "react";
import { SVGProps } from "react";

const SvgTopicMovies = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M926 412H411l497-133q15-4 23-17.5t4-28.5L883 40q-4-15-17.5-23T837 14L64 221q-15 4-22.5 17.5T38 267l50 188v395q0 37 18.5 68.5t50.5 50 69 19.5h600q37-1 68.5-19.5t50-50T963 850V450q0-16-11-27t-26-11zm-488-85-125 34V232l125-34v129zm75-149 125-34v130l-125 33V178zm340 38-140 38V124l107-28zm-615 35v130l-86 23-32-121zm650 599q0 26-18 44t-44 19H226q-26-1-44.5-19T163 850V487h725v363z"
    />
  </svg>
);

export default SvgTopicMovies;
