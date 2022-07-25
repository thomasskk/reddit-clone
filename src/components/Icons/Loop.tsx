import * as React from "react";
import { SVGProps } from "react";

const SvgLoop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M288 956q-67 0-123-32.5T76.5 835 44 712.5 76.5 590t88.5-88.5T288 469h425q49 0 90.5-24.5t66-66 24.5-91-24.5-91-66-66-91-24.5-91 24.5-66 66T531 287v88h-62v-88q0-73 41-134.5t109.5-90 141-14T885 115t66.5 124.5-14 141-90 109.5T712 531H288q-50 0-91.5 24.5t-66 66-24.5 91 24.5 91 66 66 91 24.5 91-24.5 66-66T469 712v-87h62v87q0 67-32.5 123T410 923.5 287 956h1z"
    />
  </svg>
);

export default SvgLoop;
