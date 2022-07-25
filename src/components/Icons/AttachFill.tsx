import * as React from "react";
import { SVGProps } from "react";

const SvgAttachFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m485 802 397-397 70 71-397 397q-59 55-136 73-76 18-151-2-77-21-134-78T56 732q-20-75-2-151 18-77 73-136L504 68q42-42 98.5-57T715 11t98 57 57 98 0 112.5-57 98.5L436 754q-25 25-60 34.5t-69.5 0-60-35-35-60 0-69.5 34.5-60l169-168 70 70-168 169q-10 10-10 24t10 24 24 10 24-10l378-377q22-23 30.5-53.5t.5-61.5-30.5-53.5-53.5-31-62 0-53 31.5L198 515q-39 40-52 91.5t.5 103.5 52.5 91 91 52.5 103.5.5 90.5-52h1z"
    />
  </svg>
);

export default SvgAttachFill;
