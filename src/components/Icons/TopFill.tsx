import * as React from "react";
import { SVGProps } from "react";

const SvgTopFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M900 544H724v356q-1 30-14 56h190q23 0 39.5-16.5T956 900V600q0-23-16.5-39.5T900 544zM789 294 526 31q-11-10-26-10t-26 10L211 294q-7 8-9.5 19t2 21 13.5 16 20 6h105v544q0 23 16.5 39.5T399 956h200q23 0 39.5-16.5T655 900V356h108q11 0 20-6t13.5-16 2-21-9.5-19zM274 900V544H100q-23 0-39.5 16.5T44 600v300q0 23 16.5 39.5T100 956h188q-14-26-14-56z"
    />
  </svg>
);

export default SvgTopFill;
