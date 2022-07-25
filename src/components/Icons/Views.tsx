import * as React from "react";
import { SVGProps } from "react";

const SvgViews = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1019 1000" {...props}>
    <path
      fill="currentColor"
      d="M141 417q-46-44-75-100-8-17 0-34 49-93 139-147.5T400 81q104-1 193 52t138 145q9 19 1 39 31 8 60 19 8-22 6.5-44.5T786 249q-37-71-97-123.5t-134.5-80-155-27.5-156 29T108 129.5 10 256Q0 277 0 300t10 44q34 67 88 118 33 32 72 55 19-25 41-49-38-21-70-51zm228-232q23-6 46.5-3t44 15 35 30.5T515 269q5 19 3 37 31-4 63-5 0-24-6-48-11-48-45.5-83.5t-82-49-95.5-.5-82.5 48.5T223 252t2 95q11 40 39 72 25-20 51-37-22-22-30-52.5t.5-61 31-53T369 185zm617 439q-56-107-160.5-169.5T600 394q-81-1-156.5 28T308 504.5 210 631q-10 21-10 44t10 44q34 67 88 118 81 76 187 104 103 28 208 5 107-22 192-93 63-54 101-128 13-23 13-50t-13-51zm-55 73q-33 62-87 108-72 61-164 80-90 19-179-4-91-25-160-89-46-44-75-101-8-16 0-33 49-93 139-147.5T600 456q104-1 193 52t138 145q5 10 5 21.5t-5 22.5zM553 500q-47 13-81 47t-47 80.5 0 94.5 47 81.5 80.5 46.5 94.5 0 81.5-47 46.5-80.5 0-94.5q-9-35-31-63.5T691 518t-67-23-71 5zm78 290q-31 8-61.5-.5t-53-30.5-31-53 0-61.5 30.5-53 53.5-31 62 0 53 30.5 30.5 53-.5 61.5-30.5 53-53 31.5z"
    />
  </svg>
);

export default SvgViews;
