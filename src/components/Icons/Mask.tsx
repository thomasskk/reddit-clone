import * as React from "react";
import { SVGProps } from "react";

const SvgMask = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m91 408-60-14q-12 52-12 106h62q0-47 10-92zM387 32l14 61q46-11 92-12l-1-62q-53 1-105 13zm-190 94 39 49q36-29 78-50l-28-56q-48 24-89 57zm-26 115-49-39q-33 43-57 91l57 27q20-42 49-79zm795 138q-14-52-38-100l-56 29q22 42 33 87zM599 29l-13 61q46 10 88 29l26-57q-49-22-101-33zm238 719 50 37q32-43 54-92l-57-25q-19 43-47 80zm144-263-62 2v13q-1 40-8 80l61 11q9-45 9-91v-15zM520 918l3 63q54-3 105-17l-16-60q-45 12-92 14zm272-801-38 50q37 28 67 64l48-40q-35-41-77-74zm-94 752 29 55q47-25 88-60l-41-47q-35 30-76 52zM69 556q-12 3-18.5 12.5T44 590v228q0 19 15 29l17 10 152-50q18-6 23-24l4-20-146-195q-7-9-18-12.5t-22 .5z"
    />
  </svg>
);

export default SvgMask;
