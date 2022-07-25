import * as React from "react";
import { SVGProps } from "react";

const SvgSaveTable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m221 717-19 10V97l412-2v21h63V95q0-25-18-43t-43-18H201q-25 0-43 18t-18 43v682q0 18 14.5 27t30.5 1l36-18v-70zm575 242q-8 0-14-4L558 844 335 955q-16 8-30.5-1T290 927V245q0-25 18-43t43-18h415q25 0 43 18t18 43v682q0 13-9.5 22.5T795 959h1zM558 777q8 1 14 4l192 96V245l-412 2v630l192-96q7-3 14-4z"
    />
  </svg>
);

export default SvgSaveTable;
