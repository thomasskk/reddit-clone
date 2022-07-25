import * as React from "react";
import { SVGProps } from "react";

const SvgInviteFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M607 566H357q-90 0-167 45-75 44-119 119-45 77-45 167v25q0 23 16.5 39.5T82 978h800q24 0 40.5-16.5T939 922v-25q0-90-46-167-44-75-119-119-77-45-167-45zm42-220H525q-11 0-18-7t-7-17V146q0-10 7-17t18-8h124v-8q-49-52-118-67T396 57t-106 85-40 130 40 129.5 106 85T531 498t118-67v-85zm325-162H812V22H712v162H550v100h162v162h100V284h162V184z"
    />
  </svg>
);

export default SvgInviteFill;
