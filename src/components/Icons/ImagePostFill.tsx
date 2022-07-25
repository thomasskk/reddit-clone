import * as React from "react";
import { SVGProps } from "react";

const SvgImagePostFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M409 603q-23-23-53.5-31t-61 0-53.5 31L47 797l-3-3v81q0 34 23.5 57.5T125 956h637zm147-253q0 39 27.5 66.5T650 444t66.5-27.5T744 350t-27.5-66.5T650 256t-66.5 27.5T556 350zM875 44H125q-34 0-57.5 23.5T44 125v587l153-153q35-35 81.5-47t93 0 81.5 47l394 394-3 3h31q34 0 57.5-23.5T956 875V125q0-34-23.5-57.5T875 44zM650 506q-42 0-78-21t-57-57-21-78 21-78 57-57 78-21 78 21 57 57 21 78-21 78-57 57-78 21z"
    />
  </svg>
);

export default SvgImagePostFill;
