import * as React from "react";
import { SVGProps } from "react";

const SvgSticker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M825 44H175q-36 0-66 17.5T61.5 109 44 175v650q0 36 17.5 66t47.5 47.5 66 17.5h390q23 0 40-16l335-336q16-16 16-39V175q0-36-17.5-66T891 61.5 825 44zM106 825V175q0-28 20.5-48.5T175 106h650q28 0 48.5 20.5T894 175v369H675q-51 0-88 34t-42 84q-22 7-45 7-36 1-69-15t-55-45l-52 36q31 42 77.5 64.5T500 731q22 0 44-4v167H175q-28 0-48.5-20.5T106 825zm500-120h1l-1-2v-28q0-28 20.5-48.5T675 606h175L606 852V705zM225 400q0 31 22 53t53 22 53-22 22-53-22-53-53-22-53 22-22 53zm400 0q0 31 22 53t53 22 53-22 22-53-22-53-53-22-53 22-22 53z"
    />
  </svg>
);

export default SvgSticker;
