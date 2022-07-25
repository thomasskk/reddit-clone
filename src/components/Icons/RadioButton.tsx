import * as React from "react";
import { SVGProps } from "react";

const SvgRadioButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 956q-107 0-203-48-94-47-158-129-65-85-86-190.5T60 380q28-101 97-179 70-81 169-122t206-34q104 8 195 60 93 53 152.5 142T953 443q13 103-20 202-34 102-110 178-65 64-148.5 98.5T500 956zm0-850q-88 0-166.5 37T199 246.5 120 398t-7.5 170.5 65 157T303 841t163 51.5 168.5-22T778 778q56-55 86-127.5T894 500t-30-151-85.5-128T651 136t-151-30z"
    />
  </svg>
);

export default SvgRadioButton;
