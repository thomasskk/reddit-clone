import * as React from "react";
import { SVGProps } from "react";

const SvgCustomizeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M979 229q-2-8-8-14t-14-8-16.5 0-14.5 8L778 363q-29 27-69 28t-70-26q-14-14-21.5-31.5T611 296q-1-22 7.5-43t24.5-37L785 74q6-6 8-14.5t0-16.5-8-14-15-8q-80-20-158 8-69 25-116.5 78.5t-64 123T435 370L53 753q-26 26-35 61.5t.5 70.5T54 946t61 35.5 70 .5 62-35l382-382q71 20 140.5 3.5t123-64T971 388q28-78 8-159z"
    />
  </svg>
);

export default SvgCustomizeFill;
