import * as React from "react";
import { SVGProps } from "react";

const SvgModMode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M914 120 514 21q-14-4-27 0L87 120q-19 5-31 20t-12 34v426q0 119 98 216 73 73 196 128 74 34 147 54 7 2 15 2t15-2q73-20 147-53 123-56 196-129 98-97 98-216V174q0-19-12-34t-30-20zm-20 480q0 99-92 183-68 62-179 110-58 26-120 44l-1 1q-58-16-121-43-113-49-181-111-94-84-94-184V179l394-98 394 98v421zm-643 0q-6 9-6.5 19t4.5 18.5 13.5 13.5 18.5 5h438q10 0 18.5-5t13.5-13.5 4.5-18.5-5.5-19L531 261l-14-17-38 3zm420-6H329l171-265z"
    />
  </svg>
);

export default SvgModMode;
