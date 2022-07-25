import * as React from "react";
import { SVGProps } from "react";

const SvgCommentFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M775 44H225q-49 0-90.5 24.5t-66 66T44 225v400q0 49 24.5 90.5t66 66T225 806h119v158q0 11 5.5 20t15.5 13 20.5 2.5T404 991l208-185h163q49 0 90.5-24.5t66-66T956 625V225q0-49-24.5-90.5t-66-66T775 44z"
    />
  </svg>
);

export default SvgCommentFill;
