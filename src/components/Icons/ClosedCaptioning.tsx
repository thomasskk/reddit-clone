import * as React from "react";
import { SVGProps } from "react";

const SvgClosedCaptioning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M900 906H100q-23 0-39.5-16.5T44 850V150q0-23 16.5-39.5T100 94h800q23 0 39.5 16.5T956 150v700q0 23-16.5 39.5T900 906zm-794-62h788V156H106v688zm202-210q-37-20-58.5-55.5t-21.5-78 22-78 59-55.5 79-19q49 0 91 25l-22 52q-13-12-31-18t-38-6q-26-1-50 12t-37.5 36.5T287 500t14 51 37.5 37.5T389 602q20 0 38-6.5t31-18.5l22 51q-20 14-43.5 20.5T388 655q-43 0-80-21zm287 0q-36-20-57.5-55.5t-21.5-78 21.5-78T596 367t79-19q49 0 91 25l-22 53q-13-13-31-19t-37-6q-27-1-50.5 12t-37 36.5T575 500t13.5 51 37 37.5T676 602q20 0 38-6t31-19l22 51q-20 14-43.5 20.5T675 655q-42 0-80-21z"
    />
  </svg>
);

export default SvgClosedCaptioning;
