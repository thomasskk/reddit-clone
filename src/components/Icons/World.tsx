import * as React from "react";
import { SVGProps } from "react";

const SvgWorld = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 19q-131 0-243 65-109 64-173 173-65 112-65 243t65 243q64 109 173 173 112 65 243 65t243-65q109-64 173-173 65-112 65-243t-66-243Q852 148 743 85 631 19 500 19zM160 744q-34-47-53.5-101T83 531h834q-4 58-23.5 112T840 744H160zM83 469q4-58 23.5-112T160 256h680q34 47 53.5 101T917 469H83zm701-275H215q79-74 184-100 101-26 202 0 105 26 184 100h-1zM215 806h570q-79 74-184 100-101 26-202 0-105-26-184-100z"
    />
  </svg>
);

export default SvgWorld;
