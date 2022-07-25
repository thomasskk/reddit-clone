import * as React from "react";
import { SVGProps } from "react";

const SvgFaceplate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1009 1000" {...props}>
    <path
      fill="currentColor"
      d="M0 157q0-37 18.5-68.5t50-50T137 20h686q37 0 68.5 18.5t50 50T960 157v686q0 37-18.5 68.5t-50 50T823 980H137q-37 0-68.5-18.5t-50-50T0 843V157zm65 2q0-31 21.5-52.5T139 85h682q31 0 52.5 21.5T895 159v682q0 31-21.5 52.5T821 915H139q-31 0-52.5-21.5T65 841V159zm257 100H217v211h105V259zm-6 435q5 42 37 70t74 28h106q21 2 41-4.5t36-20.5 25-33 9-40V569H316v125zm322-435h105v211H638V259z"
    />
  </svg>
);

export default SvgFaceplate;
