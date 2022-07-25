import * as React from "react";
import { SVGProps } from "react";

const SvgPendingPosts = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M125 745q-7 0-13.5-6.5T105 725V125q0-8 6.5-14t13.5-6h600q8 0 14 6t6 14h60q0-34-23-57t-57-23H125q-34 0-57 23t-23 57v600q0 34 23 57t57 23v-60zm750 210H275q-34 0-57-23t-23-57V275q0-34 23-57t57-23h600q34 0 57 23t23 57v600q0 34-23 57t-57 23zM275 255q-7 0-13.5 6t-6.5 14v600q0 8 6.5 14t13.5 6h600q8 0 14-6.5t6-13.5V275q0-8-6-14t-14-6H275zm30 290h120v60H305v-60zm420 0h120v60H725v-60zM545 305h60v120h-60V305zm0 420h60v120h-60V725zM361 405l42-43 85 85-42 43zm297 301 43-43 85 85-43 43zm2-260 85-85 42 42-85 85zM362 747l85-85 43 42-85 85z"
    />
  </svg>
);

export default SvgPendingPosts;
