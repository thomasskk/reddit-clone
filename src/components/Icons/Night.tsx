import * as React from "react";
import { SVGProps } from "react";

const SvgNight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 956q-93 1-177.5-35T174 819.5 76 667q-6-15-3-31.5t15-28 29-15 33 2.5q86 34 178 20 73-12 134-51.5t101-101T615 328q14-92-20-178-6-16-2.5-32.5t15-28.5 28-15.5T667 76q93 36 161.5 107T930 346.5 955 539q-10 109-68 201-56 91-147 147-92 58-201 68-21 1-39 1zM140 658q35 80 99 137t146.5 82T554 890t158.5-58.5 119-119T890 554t-13.5-168.5-82-146.5T658 140q30 85 21 175.5t-55.5 168T502 612t-165 65q-101 15-197-19zm513-531z"
    />
  </svg>
);

export default SvgNight;
