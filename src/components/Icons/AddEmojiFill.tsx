import * as React from "react";
import { SVGProps } from "react";

const SvgAddEmojiFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1020 1000" {...props}>
    <path
      fill="currentColor"
      d="M857 366q-45 0-85.5-17t-72-48.5-48.5-72-17-85.5q0-51 23-97Q552 9 442 22 334 35 242 92q-94 59-153 153T18 449Q6 557 42 660q36 105 114.5 183.5T340 958q103 36 211 24 110-12 204-71t153-153q57-92 70-200 13-110-24-215-46 23-97 23zm-632 84q0-31 22-53t53-22 53 22 22 53-22 53-53 22-53-22-22-53zm456 222q-32 42-80 65.5T500 760q-53 1-101-22.5T319 672l-21-31 61-43 22 30q21 28 52.5 43t66.5 15 66.5-15 52.5-43l22-30 61 43zm19-147q-31 0-53-22t-22-53 22-53 53-22 53 22 22 53-22 53-53 22zm300-419H894V0h-75v106H713v75h106v105h75V181h106v-75z"
    />
  </svg>
);

export default SvgAddEmojiFill;
