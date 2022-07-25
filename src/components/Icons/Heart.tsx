import * as React from "react";
import { SVGProps } from "react";

const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 955q-16 0-29-8-71-44-143-102-121-97-197-197Q30 515 20 388q-7-59 12-114.5T91.5 175t96-65 114-18.5 110.5 31 88 74.5q45-59 113.5-87T755 94q70 11 124 54t81.5 106.5T980 388q-10 127-111 260-76 100-197 197-72 58-143 102-13 8-29 8zM286 153q-16 0-32 3-53 9-94.5 42T97 280 82 383q9 111 101 231 69 91 180 179 68 55 137 98 69-43 137-98 111-89 180-179 92-120 101-231 6-49-11-95t-52.5-79.5T771 161t-96-4.5-87 39.5-60 75l-28 59-28-59q-26-54-76-86t-110-32z"
    />
  </svg>
);

export default SvgHeart;
