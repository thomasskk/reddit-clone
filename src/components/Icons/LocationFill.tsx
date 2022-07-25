import * as React from "react";
import { SVGProps } from "react";

const SvgLocationFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 19q-110 0-205 55-92 54-146 146-55 95-55 205 0 125 91 260 67 100 177 197 62 54 118 92 9 6 20 6t20-6q56-38 117-92 111-97 178-197 91-135 91-260 0-110-56-205-53-92-145-146-95-55-205-55zm0 581q-48 0-89-24t-65-65-24-89 24-89 65-65 89-24 89 24 65 65 24 89q0 36-13.5 68.5T626 548t-58 38.5-68 13.5z"
    />
  </svg>
);

export default SvgLocationFill;
