import * as React from "react";
import { SVGProps } from "react";

const SvgHideFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1018 1000" {...props}>
    <path
      fill="currentColor"
      d="M993 479q-39-101-114-177T706 184.5 500 144q-75 0-147 21l136 136q43-3 82.5 12t69.5 45.5 45.5 70T699 511l182 182q73-75 112-172 9-21 0-42zM146 217l34 34q-58 44-102 102T7 479q-9 21 0 42 41 104 120.5 182.5t182 117.5T522 855.5 732 802l51 52 71-71-637-637zm213 424q-49-48-57-115.5T328 399l273 273q-59 34-126.5 25.5T359 641z"
    />
  </svg>
);

export default SvgHideFill;
