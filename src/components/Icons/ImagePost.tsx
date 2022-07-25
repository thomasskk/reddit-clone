import * as React from "react";
import { SVGProps } from "react";

const SvgImagePost = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 44H125q-34 0-57.5 23.5T44 125v750q0 34 23.5 57.5T125 956h750q34 0 57.5-23.5T956 875V125q0-34-23.5-57.5T875 44zM106 875V738l135-135q23-23 53.5-31t61 0 53.5 31l291 291H125q-8 0-13.5-5.5T106 875zm788 0q0 8-5.5 13.5T875 894h-87L453 559q-35-35-81.5-47t-93.5 0-81 47l-91 91V125q0-8 5.5-13.5T125 106h750q8 0 13.5 5.5T894 125v750zM650 194q-42 0-78 21t-57 57-21 78 21 78 57 57 78 21 78-21 57-57 21-78-21-78-57-57-78-21zm0 250q-39 0-66.5-27.5T556 350t27.5-66.5T650 256t66.5 27.5T744 350t-27.5 66.5T650 444z"
    />
  </svg>
);

export default SvgImagePost;
