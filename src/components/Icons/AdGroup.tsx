import * as React from "react";
import { SVGProps } from "react";

const SvgAdGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M109 744q-8 0-13.5-5.5T90 725V125q0-8 5.5-13.5T109 106h600q8 0 13 5.5t6 13.5h62q0-34-24-57.5T709 44H109q-34 0-58 23.5T27 125v600q0 34 24 57.5t58 23.5v-62zm750 212H259q-34 0-58-23.5T177 875V275q0-34 24-57.5t58-23.5h600q33 0 57 23.5t24 57.5v600q0 34-24 57.5T859 956zM259 256q-8 0-13.5 5.5T240 275v600q0 8 5.5 13.5T259 894h600q8 0 13.5-5.5T878 875V275q0-8-5.5-13.5T859 256H259zm226 455-20-55h-98l-20 55h-63l107-272h50l107 272h-63zm-69-201-35 97h70l-34-97h-1zm347-56q32 15 51 45 20 34 19 74 1 40-19 75-18 31-49 47t-65 16h-97V439h93q35 0 67 15zm-29 195q18-10 28-28 12-22 12-47t-12-47q-10-17-28-26-15-9-32-9h-39v166h39q17-1 32-9z"
    />
  </svg>
);

export default SvgAdGroup;
