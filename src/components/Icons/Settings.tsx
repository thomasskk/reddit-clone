import * as React from "react";
import { SVGProps } from "react";

const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 344q-42 0-78 21t-57 57-21 78 21 78 57 57 78 21 78-21 57-57 21-78-21-78-57-57-78-21zm0 250q-39 0-66.5-27.5T406 500t27.5-66.5T500 406t66.5 27.5T594 500t-27.5 66.5T500 594zm477-152q-2-20-18-34t-37-14h-52q-14-1-25.5-9T828 364t-3-27 12-24l36-36q15-15 16.5-36.5T878 202q-36-45-81-80-16-13-37.5-11.5T723 127l-36 36q-11 10-25 12t-26.5-3.5T615 155t-9-25V78q0-21-13.5-37T558 23q-58-8-115 0-21 2-35 18t-14 37v52q-1 14-9 25.5T364 172t-26.5 3-24.5-12l-36-36q-15-15-36.5-16.5T203 122q-45 36-81 81-13 16-11.5 37.5T127 277l36 36q10 11 12 25t-3.5 26.5T155 385t-25 9H78q-21 0-37 13.5T23 442q-8 58 0 115 2 21 18 35t37 14h52q14 1 25.5 9t16.5 21 3 26.5-12 24.5l-36 36q-15 15-16.5 36.5T122 797q36 45 81 81 16 13 37.5 11.5T277 873l36-36q11-10 25-12t26.5 3.5T385 845t9 25v51q0 22 13.5 37.5T442 977q58 8 115 0 21-3 35-18.5t14-37.5v-51q1-14 9-25.5t21-16.5 26.5-3 24.5 12l36 36q15 15 36 16.5t38-11.5q45-36 81-80 13-17 11.5-38.5T873 723l-36-36q-10-11-12-25t3.5-26.5T845 615t25-9h51q22 0 37.5-13.5T977 558q8-58 0-115v-1zm-61 102h-46q-33 1-59.5 19.5t-39 49-7 62.5 28.5 56l32 32q-28 34-62 62l-32-33q-24-22-56-27.5t-62.5 7-49 39T544 870v46q-44 5-88 0v-46q0-33-19-60t-49.5-39.5T325 764t-56 29l-32 32q-34-28-62-62l33-32q22-24 27.5-56t-7-62.5-39-49T130 544H84q-5-44 0-88h46q33 0 60-19t39.5-49.5T236 325t-29-56l-32-32q28-34 62-62l32 32q24 24 56.5 29.5t63-7 49-39.5 18.5-60V84q44-5 88 0v46q0 33 19 60t49.5 39.5T675 236t56-29l32-32q34 28 62 62l-32 32q-24 24-29.5 56.5t7 63 39.5 49 60 18.5h46q5 44 0 88z"
    />
  </svg>
);

export default SvgSettings;