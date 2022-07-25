import * as React from "react";
import { SVGProps } from "react";

const SvgPopular = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 19q-131 0-243 65-109 64-173 173-65 112-65 243t65 243q64 109 173 173 112 65 243 65t243-65q109-64 173-173 65-112 65-243t-66-243Q852 148 743 85 631 19 500 19zm0 900q-75 0-145.5-26.5T227 817l417-417v208h62V326q0-13-9.5-22.5T674 294H392v62h208L183 773q-63-74-87-168-24-91-6-184 18-95 76.5-172.5T312 127q84-42 178-45 97-2 185.5 38.5T825 236q59 74 82 165 23 94 2 189t-81 171q-59 74-144 115-87 43-184 43z"
    />
  </svg>
);

export default SvgPopular;
