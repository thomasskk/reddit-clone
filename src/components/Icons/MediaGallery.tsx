import * as React from "react";
import { SVGProps } from "react";

const SvgMediaGallery = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M110 745q-7 0-13.5-6.5T90 725V125q0-8 6.5-14t13.5-6h600q7 0 13.5 6t6.5 14h60q0-34-23-57t-57-23H110q-34 0-57 23t-23 57v600q0 34 23 57t57 23v-60zm570-175q-34 0-64-18t-48-48-18-64 18-64 48-48 64-18 64 18 48 48 18 64q0 35-17 65t-46.5 47.5T680 570zm0-210q-33 0-54 22t-21 52.5 22.5 53T680 510q33 0 54-22t21-53q4-30-18.5-52.5T680 360zm180-165H260q-34 0-57 23t-23 57v600q0 34 23 57t57 23h600q34 0 57-23t23-57V275q0-34-23-57t-57-23zM240 875V755l105-105q30-30 70-30t70 30l245 245H260q-7 0-13.5-6.5T240 875zm635 0q0 7-6 13.5t-14 6.5h-55L515 610q-29-29-68-39.5t-77 0-65 39.5l-70 70V275q0-8 6.5-14t13.5-6h600q8 0 14 6.5t6 13.5v600z"
    />
  </svg>
);

export default SvgMediaGallery;
