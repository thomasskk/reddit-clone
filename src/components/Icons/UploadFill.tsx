import * as React from "react";
import { SVGProps } from "react";

const SvgUploadFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11 0 1022 1000" {...props}>
    <path
      fill="currentColor"
      d="m521 252-45 2-211 211 70 70 115-114v529h100V421l115 114 70-70-196-197zm300-41q-28-64-76.5-111.5T632.5 26 500 0 367.5 26t-112 73.5T179 211q-59 17-102 59t-63 98.5T2.5 486t44 110 89 76.5T250 700V600q-38 0-71.5-18t-54-49.5-24-69.5 12-72.5 45-58T225 303l29-5 10-28q25-76 90.5-123T500 100t145.5 47T736 270l10 28 29 5q38 6 67.5 29.5t45 58 12 72.5-24 69.5-54 49.5-71.5 18v100q61 0 114.5-27.5t89-76.5 44-110T986 368.5 923 270t-102-59z"
    />
  </svg>
);

export default SvgUploadFill;
