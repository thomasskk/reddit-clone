import * as React from "react";
import { SVGProps } from "react";

const SvgAdGroupFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M109 275q0-41 20-75.5t54.5-54.5 75.5-20h531q0-34-24-57.5T709 44H109q-34 0-58 23.5T27 125v600q0 34 24 57.5t58 23.5V275zm626 225q-16-8-33-8h-39v166h39q17-1 32-9 18-10 28-28 12-22 12-47t-12-47q-10-17-28-26zm-319 10-35 97h70l-34-97h-1zm443-316H259q-34 0-58 23.5T177 275v600q0 34 24 57.5t58 23.5h600q33 0 57-23.5t24-57.5V275q0-34-24-57.5T859 194zM485 711l-20-55h-98l-20 55h-63l107-272h50l107 272h-63zm329-63q-18 31-49 47t-65 16h-97V439h93q35 0 67 15t51 45q20 34 19 74 1 40-19 75z"
    />
  </svg>
);

export default SvgAdGroupFill;
