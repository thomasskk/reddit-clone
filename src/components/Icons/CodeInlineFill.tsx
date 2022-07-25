import * as React from "react";
import { SVGProps } from "react";

const SvgCodeInlineFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m777 781-79-62 175-219-175-219 79-62 200 250q11 13 11 31t-11 31zm-554 0L23 531q-11-13-11-31t11-31l200-250 79 62-175 219 175 219zm277-81q-61 0-111.5-33.5t-73.5-90-11-116T359 359q39-38 90-51t102 0 90 51l-70 70q-30-28-71-28t-70.5 29-29.5 70 29.5 70 70.5 29 71-28l70 70q-28 29-64.5 44T500 700z"
    />
  </svg>
);

export default SvgCodeInlineFill;
