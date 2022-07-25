import * as React from "react";
import { SVGProps } from "react";

const SvgTopicDiy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M813 400V100q-1-16-11.5-27T775 62H75q-16 1-27 11.5T37 100v300q1 16 11.5 26.5T75 438h700q16 0 27-11t11-27zm-75-38H113V137h625v225zm187-150q-16 0-26.5 11T887 250v170q1 22-13 39t-35 22l-294 65q-43 9-72 41.5T439 664q-33 4-54.5 28.5T363 750v150q0 36 25.5 61.5T450 987h50q36 0 61.5-25.5T587 900V750q0-32-20-56t-52-30q5-17 17-29t29-16l294-65q47-10 77.5-48t29.5-86V250q0-16-10.5-27T925 212zM513 900q0 5-4 8.5t-9 3.5h-50q-5 1-9-3t-4-9V750q1-5 4.5-9t8.5-4h50q5 0 9 4t4 9v150z"
    />
  </svg>
);

export default SvgTopicDiy;
