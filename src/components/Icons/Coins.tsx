import * as React from "react";
import { SVGProps } from "react";

const SvgCoins = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M582 56H393v1q-99 7-183 70-82 62-130 162-49 104-49 223.5T80 736q48 101 130 162 84 63 183 70v1h189q105 0 195-63 88-60 139-163 53-107 53-230.5T916 282q-51-103-139-163-90-63-195-63zM94 512q0-106 43-198 43-89 115-141 74-54 160.5-54T573 173q72 52 115 141 43 92 43 198.5T688 711q-43 89-115 141-74 54-160.5 54T252 852q-72-52-115-141-43-92-43-199zm512 393q91-70 141-173.5T794 513q3-115-46.5-219T606 120q83 7 151.5 61.5T866 322q40 88 40 190t-40 191q-40 86-108.5 140.5T606 905zm-81-193-32-91q-14 18-36 26.5t-46 8.5q-35 1-63.5-19T304 585q-16-35-16-74t17-74q16-31 44.5-50t61.5-18q23 0 45 8.5t36 27.5l32-91q-26-19-55.5-29T409 275q-55 0-101 30-49 33-75 85-29 58-29 122.5T233 634q26 53 75 85 46 31 102 31 31 0 60.5-10t54.5-28z"
    />
  </svg>
);

export default SvgCoins;
