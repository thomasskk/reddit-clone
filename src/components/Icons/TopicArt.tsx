import * as React from "react";
import { SVGProps } from "react";

const SvgTopicArt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M275 512q-58 1-106.5 29.5t-77 77T62 725q-1 109-46 208-4 9-3.5 18.5t5.5 18 13.5 13 18 5T67 984q99-45 208-47 58 0 106.5-28.5t77.5-77T487.5 725t-29-106.5-77-77.5T275 512zm0 350q-82 1-161 24 23-79 24-161 0-37 18-69t50-50 69-18.5 69 18 50 50.5 18 69-18 69-50 50-69 18zm662-633q27-35 24-79.5t-34.5-76-76-34.5T771 63L317 412q-8 7-12 16t-3 19.5 7.5 18.5 16 11.5 19.5 2 18-7.5l454-349q13-10 29-9t27.5 12.5T886 154t-9 29L528 637q-6 8-7.5 18t2 19.5 11.5 16 18.5 7.5 19.5-3 15-12zM174 426q7 8 16.5 11t19.5.5 17.5-10 10-17.5-.5-19.5-10-16.5L103 250l147-147 59 59-60 61q-8 8-11 17.5t-.5 19.5 10 17.5 17.5 10 19.5-.5 16.5-11l62-60 11 10q11 11 26 10.5t25.5-11 11-25.5-10.5-27L277 23q-11-10-27-10t-26 11L23 223q-10 11-10 27t10 27zm803 297L827 573q-8-7-17.5-10t-19.5-.5-17.5 10-10 17.5.5 19.5 11 16.5l23 24-48 49q-8 7-11 16.5t-.5 19.5 10 17.5 17.5 10 19.5-.5 16.5-11l49-48 47 47-147 147-123-124q-8-7-17.5-10t-19.5-.5-17.5 10-10 17.5.5 19.5 11 16.5l150 150q10 12 26 12t27-12l200-200q10-10 10-26t-11-26z"
    />
  </svg>
);

export default SvgTopicArt;
