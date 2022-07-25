import * as React from "react";
import { SVGProps } from "react";

const SvgVideoLive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M181 225h-62q0-36 17.5-66t47.5-47.5T250 94h400v62H250q-28 0-48.5 20.5T181 225zm784 135q-17-16-40-16l-95 1q-39 0-72 21l-77 51v-67q0-23-16.5-39.5T625 294H75q-23 0-39.5 16.5T19 350v175q31 3 62 11V356h538v177l174-115q17-11 37-11l89-1v387h-89q-20 0-37-12L619 667v177H390q8 31 11 62h224q23 0 39.5-16.5T681 850v-67l77 51q33 21 71 21l95 1q24 1 40.5-16t16.5-40V400q0-23-16-40zM19 594v64q64 8 117.5 42.5t88.5 88T269 906h63q-9-81-52.5-149T168 646 19 594zm0 133v65q42 10 73 41t42 73h65q-13-68-62.5-117T19 727z"
    />
  </svg>
);

export default SvgVideoLive;
