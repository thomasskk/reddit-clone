import * as React from "react";
import { SVGProps } from "react";

const SvgJoin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 980q-130 0-242-66-109-63-172-172-66-112-66-242t66-242q63-109 172-172 112-66 242-66t242 66q109 63 172 172 66 112 66 242t-66 242q-63 109-172 172-112 66-242 66zm0-900q-113 0-211 57-95 55-151 150-58 98-58 213.5T137 713q55 95 150 150 97 57 213 57t213-57q95-55 150-150 57-97 57-213 0-113-58-211-56-95-151-151-98-58-211-58zm210 390H530V290h-60v180H290v60h180v180h60V530h180v-60z"
    />
  </svg>
);

export default SvgJoin;
