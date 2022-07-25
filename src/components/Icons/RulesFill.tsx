import * as React from "react";
import { SVGProps } from "react";

const SvgRulesFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 44H125q-34 0-57.5 23.5T44 125v75q0 23 16.5 39.5T100 256h44v644q0 23 16.5 39.5T200 956h650q23 0 39.5-16.5T906 900V125q0-34-23.5-57.5T825 44zM287 338h24v-77q-12 6-24 6v-25q14 0 24-9h35v105h21v28h-80v-28zm43 95q23 0 34.5 11t11.5 29q0 13-7 23-7 11-26 21-21 12-24 22h58v28h-99v-8q0-17 6-28 9-16 32-31l4-2q14-9 18-13t4-11q0-11-13-11-9 1-16.5 6T301 482l-23-17q7-15 21-23.5t31-8.5zm-3 334q-15 0-29-7t-23-20l21-18q10 16 28.5 16t19.5-14q0-8-6-11.5t-20-3.5h-10v-24h11q22 0 22-11.5T327 662q-17 0-29 13l-18-22q21-20 50-20 22 0 33.5 9.5T375 668q0 10-5 17.5T356 696q10 2 17 10.5t6 18.5q0 20-14 31t-38 11zm423-36H450v-62h300v62zm0-200H450v-62h300v62zm0-200H450v-62h300v62z"
    />
  </svg>
);

export default SvgRulesFill;
