import * as React from "react";
import { SVGProps } from "react";

const SvgTop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M848 544H655V356h108q11 0 20-6t13.5-16 2-21-9.5-19L526 31q-11-10-26-10t-26 10L211 294q-7 8-9.5 19t2 21 13.5 16 20 6h105v188H154q-24 0-40.5 16.5T97 600v300q0 23 16.5 39.5T154 956h694q23 0 39.5-16.5T904 900V600q0-23-16.5-39.5T848 544zm-688 62h183v288H160V606zm433-312v600H405V294H300L500 94l200 200H593zm249 600H655V606h187v288z"
    />
  </svg>
);

export default SvgTop;
