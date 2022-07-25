import * as React from "react";
import { SVGProps } from "react";

const SvgAward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 244h-37q19-30 21-64.5t-12.5-66-43-52.5T741 35.5t-66.5 8T619 83L500 226 381 83q-23-27-55.5-39.5t-66.5-8T196.5 61t-43 52.5-12.5 66 21 64.5h-37q-34 0-57.5 23.5T44 325v550q0 34 23.5 57.5T125 956h750q34 0 57.5-23.5T956 875V325q0-34-23.5-57.5T875 244zM667 123q15-18 37.5-24t44.5 2 35 27 13 42q0 31-21.5 52.5T724 244H567zm-464 47q0-23 13-42t35-27q13-4 26-4 17 0 31.5 7t24.5 19l100 121H276q-30 0-51.5-21.5T203 170zm691 705q0 8-5.5 13.5T875 894H125q-8 0-13.5-5.5T106 875V325q0-8 5.5-13.5T125 306h750q8 0 13.5 5.5T894 325v550zM531 400h-62v169H300v62h169v169h62V631h169v-62H531V400z"
    />
  </svg>
);

export default SvgAward;
