import * as React from "react";
import { SVGProps } from "react";

const SvgMediaGalleryFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M485 650q-30-30-70-30t-70 30L175 820v60q0 34 23 57t57 23h535zM110 275q0-42 19.5-76.5t54-54T260 125h530q0-34-23-57t-57-23H110q-34 0-57 23t-23 57v600q0 34 23 57t57 23V275zm570 85q-33 0-54 22t-21 52.5 22.5 53T680 510q33 0 54-22t21-53q4-30-18.5-52.5T680 360zm180-165H260q-34 0-57 23t-23 57v470l130-130q29-29 68-39.5t77 0 65 39.5l345 345q30-4 52.5-27t22.5-53V280q0-37-23-61t-57-24zM680 570q-34 0-64-18t-48-48-18-64 18-64 48-48 64-18 64 18 48 48 18 64.5-17 64.5-46.5 47.5T680 570z"
    />
  </svg>
);

export default SvgMediaGalleryFill;
