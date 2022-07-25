import * as React from "react";
import { SVGProps } from "react";

const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M380 1000q-15 0-25.5-10.5T344 964V806H225q-49 0-90.5-24.5t-66-66T44 625V225q0-49 24.5-90.5t66-66T225 44h550q49 0 90.5 24.5t66 66T956 225v400q0 49-24.5 90.5t-66 66T775 806H612L404 991q-10 9-24 9zM225 106q-32 0-59.5 16T122 165.5 106 225v400q0 32 16 59.5t43.5 43.5 59.5 16h181v161l182-161h187q32 0 59.5-16t43.5-43.5 16-59.5V225q0-32-16-59.5T834.5 122 775 106H225z"
    />
  </svg>
);

export default SvgComment;
