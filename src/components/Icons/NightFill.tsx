import * as React from "react";
import { SVGProps } from "react";

const SvgNightFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M624 138q37 95 22 195-13 79-56.5 146T479 589.5 333 646q-100 15-195-22-7-3-14-1.5t-12.5 6.5-7.5 12.5 1 14.5q35 89 104 154t159 94.5T553.5 922t175-63T859 728.5t63-175T904.5 368 810 209 656 105q-7-3-14.5-1t-12.5 7.5-6.5 12.5 1.5 14zM500 956q-93 1-177.5-35T174 819.5 76 667q-6-15-3-31.5t15-28 29-15 33 2.5q86 34 178 20 73-12 134-51.5t101-101T615 328q14-92-20-178-6-16-2.5-32.5t15-28.5 28-15.5T667 76q93 36 161.5 107T930 346.5 955 539q-10 109-68 201-56 91-147 147-92 58-201 68-21 1-39 1zM140 658q35 80 99 137t146.5 82T554 890t158.5-58.5 119-119T890 554t-13.5-168.5-82-146.5T658 140q26 73 23 149.5T647.5 437t-85 125.5-125.5 85T289.5 681 140 658zm513-531z"
    />
  </svg>
);

export default SvgNightFill;